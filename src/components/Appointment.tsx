import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface TimeSlot {
  id: string;
  slot_date: string;
  time_slot: string;
  is_available: boolean;
}

export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');

  const servicesList = [
    'Auriculoterapia',
    'Terapia Comunitária Integrativa',
    'Escuta Terapêutica',
    'Grupos Terapêuticos'
  ];
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    loadSlots();
  }, []);

  const loadSlots = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('appointment_slots')
        .select('*')
        .eq('is_available', true)
        .order('slot_date', { ascending: true })
        .order('time_slot', { ascending: true });

      if (error) throw error;
      
      // Se não houver dados no banco, injetamos dados de teste para você poder visualizar
      if (!data || data.length === 0) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const dayAfter = new Date(today);
        dayAfter.setDate(dayAfter.getDate() + 2);
        const nextWeek = new Date(today);
        nextWeek.setDate(nextWeek.getDate() + 5);

        const mockData = [
          { id: '1', slot_date: tomorrow.toISOString().split('T')[0], time_slot: '09:00', is_available: true },
          { id: '2', slot_date: tomorrow.toISOString().split('T')[0], time_slot: '10:30', is_available: true },
          { id: '3', slot_date: tomorrow.toISOString().split('T')[0], time_slot: '14:00', is_available: true },
          { id: '4', slot_date: dayAfter.toISOString().split('T')[0], time_slot: '11:00', is_available: true },
          { id: '5', slot_date: dayAfter.toISOString().split('T')[0], time_slot: '16:00', is_available: true },
          { id: '6', slot_date: nextWeek.toISOString().split('T')[0], time_slot: '08:00', is_available: true },
          { id: '7', slot_date: nextWeek.toISOString().split('T')[0], time_slot: '13:00', is_available: true },
        ];
        setAvailableSlots(mockData);
      } else {
        setAvailableSlots(data);
      }

    } catch (error) {
      console.error('Erro ao carregar horários:', error);
    } finally {
      setLoading(false);
    }
  };

  const uniqueAvailableDates = new Set(availableSlots.map(slot => slot.slot_date));

  const getTimesForDate = (date: string) => {
    return availableSlots
      .filter(slot => slot.slot_date === date)
      .map(slot => slot.time_slot);
  };

  const formatDateLabel = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    return new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long'
    }).format(date);
  };

  // Funções do Calendário
  const daysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));

  const renderCalendar = () => {
    const totalDays = daysInMonth(currentMonth);
    const startDay = firstDayOfMonth(currentMonth);
    const days = [];

    // Espaços vazios antes do primeiro dia
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    for (let d = 1; d <= totalDays; d++) {
      const dateObj = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d);
      const dateStr = dateObj.toISOString().split('T')[0];
      const hasSlots = uniqueAvailableDates.has(dateStr);
      const isSelected = selectedDate === dateStr;
      const isPast = dateObj < new Date(new Date().setHours(0,0,0,0));

      days.push(
        <button
          key={d}
          disabled={!hasSlots || isPast}
          onClick={() => {
            setSelectedDate(dateStr);
            setSelectedTime('');
            setSelectedService('');
          }}
          className={`h-12 w-full rounded-lg flex flex-col items-center justify-center transition-all relative
            ${isSelected ? 'bg-rose-400 text-white shadow-lg z-10' : ''}
            ${hasSlots && !isSelected && !isPast ? 'hover:bg-rose-50 text-gray-800' : 'text-gray-300 pointer-events-none'}
          `}
        >
          <span className="font-medium">{d}</span>
          {hasSlots && !isSelected && !isPast && (
            <span className="absolute bottom-1 w-1 h-1 bg-rose-400 rounded-full"></span>
          )}
        </button>
      );
    }
    return days;
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime || !selectedService) return;
    const msg = `Olá! Gostaria de agendar uma sessão de ${selectedService} para ${formatDateLabel(selectedDate)} às ${selectedTime}.`;
    window.open(`https://wa.me/5511980317304?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="agendamento" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Agende Seu Atendimento</h2>
          <p className="text-lg text-gray-600">Selecione uma data no calendário para ver os horários.</p>
          <div className="w-20 h-1 bg-rose-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Coluna do Calendário */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800 capitalize">
                {new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(currentMonth)}
              </h3>
              <div className="flex gap-2">
                <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ChevronLeft /></button>
                <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ChevronRight /></button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(d => (
                <div key={d} className="text-xs font-bold text-gray-400 py-2">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {renderCalendar()}
            </div>
          </div>

          {/* Coluna de Horários */}
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl shadow-xl p-8 min-h-[400px]">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-rose-400 border-t-transparent"></div>
              </div>
            ) : selectedDate ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2 text-gray-700 font-bold text-lg mb-2">
                  <Clock className="w-5 h-5 text-rose-400" />
                  Agendamento para <span className="capitalize">{formatDateLabel(selectedDate).split('-')[0]}</span>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">1. Escolha o Serviço</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-700 focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all cursor-pointer shadow-sm"
                  >
                    <option value="" disabled>Selecione um serviço...</option>
                    {servicesList.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {selectedService && (
                  <div className="space-y-2 animate-in fade-in duration-300">
                    <label className="block text-sm font-semibold text-gray-700">2. Escolha o Horário</label>
                    <div className="grid grid-cols-2 gap-3">
                      {getTimesForDate(selectedDate).map(time => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-xl font-medium transition-all ${
                            selectedTime === time
                              ? 'bg-rose-400 text-white shadow-lg scale-105'
                              : 'bg-white text-gray-700 hover:bg-rose-100 border border-gray-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedService && selectedTime && (
                  <button
                    onClick={handleConfirm}
                    className="w-full mt-8 bg-gradient-to-r from-rose-400 to-amber-500 hover:from-rose-500 hover:to-amber-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-300"
                  >
                    <Send className="w-5 h-5" />
                    Confirmar no WhatsApp
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                <CalendarIcon className="w-16 h-16 mb-4 opacity-20" />
                <p>Selecione um dia com o ponto rosa para ver os horários disponíveis.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
