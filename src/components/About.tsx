import { useState } from "react";
import { Users, Target, Sparkles, X, Heart, Users as UsersIcon, Leaf } from "lucide-react";

export default function About() {
  const [selectedPro, setSelectedPro] = useState<number | null>(null);

  // Array de profissionais, permitindo adicionar mais facilmente no futuro
  const professionals = [
    {
      id: 1,
      name: "Maria Iracelma",
      roles: "Assistente Social | Especialista em Saúde Coletiva | Terapeuta Comunitária | Auriculoterapeuta",
      image: "/image2.jpeg",
      resume: [
        "Profissional com experiência em práticas integrativas e idealizadora do projeto Florescer Integrativo. Desenvolvo ações voltadas ao acolhimento, escuta sensível e fortalecimento emocional, promovendo espaços de cuidado, partilha e conexão humana.",
        "Minha atuação integra práticas terapêuticas, dinâmicas em grupo, meditação, relaxamento e atividades voltadas ao bem-estar físico, emocional e social, especialmente com idosos, mulheres, profissionais da saúde e comunidade em geral.",
        "Acredito no afeto como ferramenta de transformação e no encontro como caminho para fortalecer vínculos, resgatar a autoestima e cultivar saúde integral."
      ]
    }
  ];

  return (
    <>
      <section id="sobre" className="py-16 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sobre o Projeto
            </h2>
            <div className="w-20 h-1 bg-rose-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-rose-50 rounded-3xl p-8 md:p-12 shadow-sm text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg font-medium">
              O <strong className="text-rose-600">Florescer Integrativo</strong> é um projeto voltado ao acolhimento, à promoção da saúde emocional e ao fortalecimento de vínculos por meio de práticas integrativas e comunitárias.
            </p>
            <p>
              Com uma proposta humanizada e acolhedora, o projeto busca oferecer espaços de escuta, partilha e cuidado, incentivando o desenvolvimento do autocuidado, da autoestima e do bem-estar emocional em diferentes fases da vida.
            </p>
            <p>
              As atividades são realizadas de forma individual e em grupo, utilizando recursos terapêuticos integrativos que favorecem o equilíbrio emocional, o fortalecimento das relações e a valorização das experiências de vida de cada participante.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Entre as práticas desenvolvidas estão:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-rose-400 flex-shrink-0" /> Terapia Comunitária Integrativa (TCI)</li>
                <li className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-rose-400 flex-shrink-0" /> Rodas de conversa e acolhimento</li>
                <li className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-rose-400 flex-shrink-0" /> Dinâmicas terapêuticas</li>
                <li className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-rose-400 flex-shrink-0" /> Práticas de relaxamento e autocuidado</li>
                <li className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-rose-400 flex-shrink-0" /> Auriculoterapia</li>
                <li className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-rose-400 flex-shrink-0" /> Escalda-pés terapêutico</li>
                <li className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-rose-400 flex-shrink-0" /> Atividades de fortalecimento emocional e social</li>
              </ul>
            </div>
            
            <p className="mt-6 italic border-l-4 border-rose-300 pl-4 py-2">
              O projeto acredita no cuidado construído através da escuta, do respeito e da conexão humana, promovendo encontros que acolhem histórias, emoções e trajetórias de vida com sensibilidade e empatia.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Target className="w-8 h-8 text-amber-500 mb-4" />
                <h4 className="font-bold text-lg mb-2">Missão</h4>
                <p className="text-sm">Promover acolhimento, cuidado emocional e fortalecimento de vínculos por meio de práticas integrativas e comunitárias acessíveis e humanizadas.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Leaf className="w-8 h-8 text-green-500 mb-4" />
                <h4 className="font-bold text-lg mb-2">Visão</h4>
                <p className="text-sm">Ser um espaço de referência em acolhimento integrativo, contribuindo para a promoção da saúde emocional, da convivência comunitária e do bem-estar coletivo.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Heart className="w-8 h-8 text-rose-500 mb-4" />
                <h4 className="font-bold text-lg mb-2">Valores</h4>
                <p className="text-sm">Acolhimento, empatia, escuta ativa, respeito à singularidade, cuidado humanizado, fortalecimento comunitário e promoção da saúde integral.</p>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-4">
              <UsersIcon className="w-10 h-10 text-blue-500 flex-shrink-0" />
              <div className="text-center md:text-left">
                <h4 className="font-bold text-lg mb-1">Público Atendido</h4>
                <p className="text-sm">O projeto atende adolescentes, adultos, idosos, famílias, grupos comunitários e organizações, oferecendo práticas integrativas, rodas de conversa, ações de cuidado emocional e fortalecimento das relações interpessoais, contribuindo para ambientes mais saudáveis, humanizados e alinhados às diretrizes de saúde emocional e prevenção de riscos psicossociais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profissionais" className="py-16 px-4 bg-gray-50 relative">
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


                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </section>
    </>
  );
}

