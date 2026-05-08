import { MessageCircle, Users2, Baby, Smile, Ear } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Ear,
      title: 'Auriculoterapia',
      description: 'Técnica integrativa que estimula pontos específicos da orelha para promover o bem-estar físico e emocional, auxiliando no alívio de dores, estresse e ansiedade.',
      color: 'from-rose-400 to-rose-500'
    },
    {
      icon: Users2,
      title: 'Terapia Comunitária Integrativa',
      description: 'Rodas de conversa em grupo onde compartilhamos experiências, construímos vínculos e descobrimos juntos soluções para os desafios do dia a dia.',
      color: 'from-amber-400 to-amber-500'
    },
    {
      icon: Baby,
      title: 'Orientação Familiar',
      description: 'Apoio e orientação para famílias que buscam melhorar a comunicação, resolver conflitos e fortalecer os laços afetivos entre seus membros.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Smile,
      title: 'Grupos de Apoio',
      description: 'Encontros temáticos para pessoas que enfrentam desafios semelhantes, promovendo acolhimento mútuo, aprendizado coletivo e transformação.',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="servicos" className="py-16 px-4 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Serviços Oferecidos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha a modalidade que melhor se adapta às suas necessidades.
            Estou aqui para acolher você.
          </p>
          <div className="w-20 h-1 bg-rose-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Como Funciona?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-rose-400 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Agende sua avaliação</h4>
                <p className="text-sm text-gray-600">Escolha um horário disponível que funcione para você</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Confirme pelo WhatsApp</h4>
                <p className="text-sm text-gray-600">Envie seus dados e receba a confirmação instantânea</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Receba o acolhimento</h4>
                <p className="text-sm text-gray-600">Compareça no horário marcado e inicie sua jornada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
