import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Calendar, Clock, Trash2, Plus, LogOut } from 'lucide-react';
import { sendWhatsAppAlert } from '../lib/whatsapp';

interface TimeSlot {
  id: string;
  slot_date: string;
  time_slot: string;
  is_available: boolean;
}

export default function Admin() {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/login');
    } else {
      if (!user) {
        sendWhatsAppAlert(`🚨 Alerta de Segurança:\nUm acesso foi feito no seu Painel Administrativo agora.\nUsuário: ${session.user.email}`);
      }
      setUser(session.user);
      fetchSlots();
    }
  };

  const fetchSlots = async () => {
    try {
      const { data, error } = await supabase
        .from('appointment_slots')
        .select('*')
        .order('slot_date', { ascending: true })
        .order('time_slot', { ascending: true });

      if (error) throw error;
      setSlots(data || []);
    } catch (error) {
      console.error('Erro ao buscar slots:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddSlot = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDate || !newTime) return;

    try {
      const { error } = await supabase
        .from('appointment_slots')
        .insert([
          { slot_date: newDate, time_slot: newTime, is_available: true }
        ]);

      if (error) throw error;
      
      sendWhatsAppAlert(`✅ Novo horário cadastrado no painel:\nData: ${newDate.split('-').reverse().join('/')}\nHora: ${newTime}`);
      
      setNewTime('');
      fetchSlots(); // Recarrega a lista
    } catch (error) {
      console.error('Erro ao adicionar slot:', error);
      alert('Erro ao adicionar horário. Verifique o console.');
    }
  };

  const handleDeleteSlot = async (id: string) => {
    if (!confirm('Deseja realmente excluir este horário?')) return;
    const slotToDelete = slots.find(s => s.id === id);

    try {
      const { error } = await supabase
        .from('appointment_slots')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      if (slotToDelete) {
        sendWhatsAppAlert(`🗑️ Horário excluído do sistema:\nData: ${slotToDelete.slot_date.split('-').reverse().join('/')}\nHora: ${slotToDelete.time_slot}`);
      }

      fetchSlots();
    } catch (error) {
      console.error('Erro ao excluir:', error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const formatDateLabel = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    return new Intl.DateTimeFormat('pt-BR', {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Carregando painel...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-rose-100 rounded-lg flex items-center justify-center text-rose-500 flex-shrink-0">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl font-bold text-gray-800 truncate">Painel</h1>
              <p className="text-[10px] sm:text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors font-medium p-2 sm:px-4 sm:py-2 rounded-lg hover:bg-red-50 flex-shrink-0"
          >
            <LogOut className="w-5 h-5" />
            <span className="hidden sm:inline">Sair</span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
        
        {/* Formulário de Adição */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 md:sticky md:top-24">
            <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Plus className="w-5 h-5 text-rose-500" />
              Adicionar Disponibilidade
            </h2>

            <form onSubmit={handleAddSlot} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Data</label>
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Horário (ex: 14:00)</label>
                <input
                  type="time"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 rounded-xl transition-colors mt-4"
              >
                Salvar Horário
              </button>
            </form>
          </div>
        </div>

        {/* Lista de Horários */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-4 md:mt-0">
            <div className="p-5 sm:p-6 border-b border-gray-100 flex justify-between items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-800 truncate">Horários Cadastrados</h2>
              <span className="bg-rose-100 text-rose-600 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold flex-shrink-0">
                {slots.length} totais
              </span>
            </div>
            
            {slots.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                Nenhum horário cadastrado ainda no banco de dados.
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {slots.map((slot) => (
                  <div key={slot.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-600">
                        <span className="text-xs font-bold">{slot.slot_date.split('-')[2]}</span>
                        <span className="text-[10px] uppercase">{new Date(slot.slot_date + 'T00:00:00').toLocaleString('pt-BR', { month: 'short' })}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-800 capitalize text-sm sm:text-base truncate">{formatDateLabel(slot.slot_date)}</p>
                        <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3" /> {slot.time_slot}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 border-gray-100 pt-3 sm:pt-0">
                      <span className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold ${
                        slot.is_available 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {slot.is_available ? 'Disponível' : 'Agendado'}
                      </span>
                      <button 
                        onClick={() => handleDeleteSlot(slot.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                        title="Excluir Horário"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}
