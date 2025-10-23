import { Heart } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
            <Heart className="w-10 h-10 text-green-500" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Espaço de Terapia Comunitária
            <span className="block text-green-600 mt-2">Ana Paula Silva</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Um espaço acolhedor dedicado ao cuidado emocional e ao bem-estar da comunidade.
            Aqui você encontra escuta empática, apoio genuíno e ferramentas para transformar sua vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('agendamento')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              Agendar Consulta
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              Conheça Meu Trabalho
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
