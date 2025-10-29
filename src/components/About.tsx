import { Users, Target, Sparkles } from 'lucide-react';

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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Minha História</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Com anos de dedicação à terapia comunitária, minha jornada começou
                quando percebi a necessidade de criar espaços de escuta e acolhimento na comunidade,
                especialmente para aqueles que não têm acesso a cuidados emocionais.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Acredito que todos merecem ser ouvidos, compreendidos e apoiados em suas dificuldades.
                A terapia comunitária é um instrumento poderoso de transformação social e pessoal,
                que valoriza a força e a sabedoria de cada pessoa.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-100 to-lime-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Minha Missão</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Promover saúde mental e bem-estar através de práticas terapêuticas acessíveis,
                humanizadas e inclusivas. Construir redes de apoio e fortalecer os vínculos
                comunitários.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cada sessão é um espaço seguro onde você pode compartilhar suas vivências,
                encontrar acolhimento e descobrir novos caminhos para lidar com os desafios da vida.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-rose-50 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-400 rounded-full mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Projeto Social</h4>
            <p className="text-gray-600">
              Rodas de terapia comunitária gratuitas mensais para fortalecer laços e promover
              saúde mental coletiva.
            </p>
          </div>

          <div className="text-center p-6 bg-amber-50 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Atendimento Individual</h4>
            <p className="text-gray-600">
              Sessões personalizadas com escuta ativa, empatia e técnicas terapêuticas eficazes
              para seu momento.
            </p>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Grupos de Apoio</h4>
            <p className="text-gray-600">
              Encontros em grupo para compartilhar experiências, aprender coletivamente e
              construir resiliência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
