import { Users, Target, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sobre Mim e Meu Trabalho
          </h2>
          <div className="w-20 h-1 bg-rose-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Resumo Profissional – Práticas Integrativas e Complementares
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Profissional da área da saúde com experiência em Práticas
                Integrativas e Complementares, atuando na promoção do bem-estar
                físico, emocional e espiritual por meio de abordagens que
                valorizam o cuidado integral do ser humano. Desenvolve
                atividades terapêuticas voltadas à escuta, acolhimento e
                fortalecimento dos vínculos comunitários, com foco na Terapia
                Comunitária Integrativa, auriculoterapia, meditação, relaxamento
                guiado e práticas de autocuidado.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Com trajetória dedicada à humanização do cuidado e à saúde
                coletiva, integra saberes tradicionais e científicos,
                estimulando o protagonismo do indivíduo no próprio processo de
                cura. Atua com grupos comunitários, população em situação de
                rua, adolescentes e empresas, promovendo espaços de partilha,
                reflexão e integração corpo-mente-espírito.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-100 to-lime-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Minha Missão
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Promover o bem-estar integral das pessoas por meio de práticas
                terapêuticas e integrativas, fortalecendo o autocuidado, os
                vínculos humanos e o sentido de pertencimento através do afeto e
                da escuta.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ser reconhecido como um espaço de referência em acolhimento e
                promoção de saúde integral, inspirando pessoas e comunidades a
                florescerem emocionalmente e espiritualmente por meio do
                encontro humano e da consciência afetiva.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-rose-50 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-400 rounded-full mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Projeto Social
            </h4>
            <p className="text-gray-600">
              Rodas de terapia comunitária gratuitas mensais para fortalecer
              laços e promover saúde mental coletiva.
            </p>
          </div>

          <div className="text-center p-6 bg-amber-50 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Atendimento Individual
            </h4>
            <p className="text-gray-600">
              Sessões personalizadas com escuta ativa, empatia e técnicas
              terapêuticas eficazes para seu momento.
            </p>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Grupos de Apoio
            </h4>
            <p className="text-gray-600">
              Encontros em grupo para compartilhar experiências, aprender
              coletivamente e construir resiliência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
