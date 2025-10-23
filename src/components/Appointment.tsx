import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface TimeSlot {
  id: string;
  day_of_week: number;
  time_slot: string;
  is_available: boolean;
}

export default function Appointment() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);

  const daysOfWeek = [
    { value: 1, label: 'Segunda-feira' },
    { value: 2, label: 'Terça-feira' },
    { value: 3, label: 'Quarta-feira' },
    { value: 4, label: 'Quinta-feira' },
    { value: 5, label: 'Sexta-feira' }
  ];

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
        .order('day_of_week', { ascending: true })
        .order('time_slot', { ascending: true });

      if (error) throw error;
      setAvailableSlots(data || []);
    } catch (error) {
      console.error('Erro ao carregar horários:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTimesForDay = (day: number) => {
    return availableSlots
      .filter(slot => slot.day_of_week === day)
      .map(slot => slot.time_slot);
  };

  const handleConfirm = () => {
    if (!selectedDay || !selectedTime || !name || !phone) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const dayName = daysOfWeek.find(d => d.value === selectedDay)?.label || '';

    const message = `Olá! Gostaria de agendar uma consulta.

*Nome:* ${name}
*Telefone:* ${phone}
*Dia:* ${dayName}
*Horário:* ${selectedTime}

Aguardo confirmação. Obrigado!`;

    const whatsappNumber = '5511999999999';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="agendamento" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Agende Sua Consulta
          </h2>
          <p className="text-lg text-gray-600">
            Escolha o melhor dia e horário para você. É rápido e fácil!
          </p>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8">
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Carregando horários disponíveis...</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Escolha o dia da semana
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {daysOfWeek.map(day => (
                    <button
                      key={day.value}
                      onClick={() => {
                        setSelectedDay(day.value);
                        setSelectedTime('');
                      }}
                      className={`p-4 rounded-xl font-medium transition-all ${
                        selectedDay === day.value
                          ? 'bg-green-600 text-white shadow-lg scale-105'
                          : 'bg-white text-gray-700 hover:bg-green-100'
                      }`}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDay && (
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Escolha o horário
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {getTimesForDay(selectedDay).length > 0 ? (
                      getTimesForDay(selectedDay).map(time => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-xl font-medium transition-all ${
                            selectedTime === time
                              ? 'bg-blue-600 text-white shadow-lg scale-105'
                              : 'bg-white text-gray-700 hover:bg-blue-100'
                          }`}
                        >
                          {time}
                        </button>
                      ))
                    ) : (
                      <p className="col-span-full text-gray-500 text-center py-4">
                        Nenhum horário disponível para este dia
                      </p>
                    )}
                  </div>
                </div>
              )}

              {selectedTime && (
                <div className="space-y-4 pt-4">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <User className="w-5 h-5 text-purple-600" />
                      Seu nome completo
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Digite seu nome"
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <Phone className="w-5 h-5 text-purple-600" />
                      Seu telefone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    onClick={handleConfirm}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Confirmar pelo WhatsApp
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 text-center bg-blue-50 rounded-xl p-6">
          <p className="text-gray-700">
            <span className="font-semibold">Importante:</span> Ao confirmar, você será redirecionado ao WhatsApp
            para finalizar seu agendamento. Respondo em até 24 horas!
          </p>
        </div>
      </div>
    </section>
  );
}
