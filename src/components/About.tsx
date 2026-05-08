import { useState } from "react";
import { Users, Target, Sparkles, X } from "lucide-react";

export default function About() {
  const [selectedPro, setSelectedPro] = useState<number | null>(null);

  // Array de profissionais, permitindo adicionar mais facilmente no futuro
  const professionals = [
    {
      id: 1,
      name: "Maria Iracelma Santos",
      roles: "Assistente Social | Especialista em Saúde Coletiva | Terapeuta Comunitária | Auriculoterapeuta",
      image: "/proimage.jpeg",
      resume: [
        "Profissional da área da saúde com experiência em Práticas Integrativas e Complementares, atuando na promoção do bem-estar físico, emocional e espiritual por meio de abordagens que valorizam o cuidado integral do ser humano. Desenvolve atividades terapêuticas voltadas à escuta, acolhimento e fortalecimento dos vínculos comunitários, com foco na Terapia Comunitária Integrativa, auriculoterapia, meditação, relaxamento guiado e práticas de autocuidado.",
        "Com trajetória dedicada à humanização do cuidado e à saúde coletiva, integra saberes tradicionais e científicos, estimulando o protagonismo do indivíduo no próprio processo de cura. Atua com grupos comunitários, população em situação de rua, adolescentes e empresas, promovendo espaços de partilha, reflexão e integração corpo-mente-espírito."
      ],
      mission: [
        "Promover o bem-estar integral das pessoas por meio de práticas terapêuticas e integrativas, fortalecendo o autocuidado, os vínculos humanos e o sentido de pertencimento através do afeto e da escuta.",
        "Ser reconhecido como um espaço de referência em acolhimento e promoção de saúde integral, inspirando pessoas e comunidades a florescerem emocionalmente e espiritualmente por meio do encontro humano e da consciência afetiva."
      ]
    }
  ];

  return (
    <section id="sobre" className="py-16 px-4 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Profissionais
          </h2>
          <div className="w-20 h-1 bg-rose-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Conheça a equipe dedicada a promover seu bem-estar físico, emocional e espiritual.
          </p>
        </div>

        {/* Lista de Profissionais */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {professionals.map((pro) => (
            <div 
              key={pro.id}
              onClick={() => setSelectedPro(pro.id)}
              className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 max-w-sm w-full group flex flex-col items-center text-center"
            >
              <div className="h-80 w-full overflow-hidden bg-gray-50 flex justify-center items-center">
                <img 
                  src={pro.image} 
                  alt={pro.name} 
                  className="w-full h-full object-cover object-[50%_25%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 w-full flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-rose-500 transition-colors">{pro.name}</h3>
                <p className="text-sm text-gray-500 font-medium mb-6 line-clamp-3 h-[60px]">
                  {pro.roles}
                </p>
                <span className="inline-flex items-center justify-center w-full border-2 border-rose-100 text-rose-500 bg-transparent px-6 py-3 rounded-full font-semibold text-sm transition-all group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500">
                  Ver perfil completo
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Cards de Atuação */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-8 bg-white shadow-sm border border-rose-50 rounded-2xl hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-400 rounded-full mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              Projeto Social
            </h4>
            <p className="text-gray-600">
              Rodas de terapia comunitária integrativa gratuitas mensais para fortalecer
              laços e promover saúde mental coletiva.
            </p>
          </div>

          <div className="text-center p-8 bg-white shadow-sm border border-amber-50 rounded-2xl hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              Atendimento Individual
            </h4>
            <p className="text-gray-600">
              Sessões personalizadas com escuta ativa, empatia e técnicas
              terapêuticas eficazes para seu momento.
            </p>
          </div>

          <div className="text-center p-8 bg-white shadow-sm border border-green-50 rounded-2xl hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              Grupos de Apoio
            </h4>
            <p className="text-gray-600">
              Encontros em grupo para compartilhar experiências, aprender
              coletivamente e construir resiliência.
            </p>
          </div>
        </div>
      </div>

      {/* Modal do Profissional */}
      {selectedPro !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedPro(null)}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedPro(null)}
              className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-rose-100 hover:text-rose-600 rounded-full transition-colors z-10 shadow-sm backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            
            {professionals.filter(p => p.id === selectedPro).map(pro => (
              <div key={pro.id} className="flex flex-col md:flex-row min-h-[60vh]">
                {/* Coluna da Imagem */}
                <div className="md:w-2/5 relative bg-gray-100">
                  <div className="h-72 md:h-full md:absolute md:inset-0">
                    <img 
                      src={pro.image} 
                      alt={pro.name} 
                      className="w-full h-full object-cover object-[50%_25%]" 
                    />
                  </div>
                </div>
                
                {/* Coluna de Texto */}
                <div className="md:w-3/5 p-8 md:p-12 bg-white">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{pro.name}</h2>
                  <p className="text-rose-500 font-medium mb-8 pb-8 border-b border-gray-100 text-sm md:text-base">{pro.roles}</p>

                  <div className="space-y-10">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-lg">✦</span>
                        Resumo Profissional
                      </h3>
                      {pro.resume.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed mb-4 text-justify">{paragraph}</p>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center text-lg">✦</span>
                        Minha Missão
                      </h3>
                      {pro.mission.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed mb-4 text-justify">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

