
export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-amber-50 to-green-50 pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="/image.png"
              alt="Florescer Integrativo"
              className="h-32 w-auto mx-auto mb-4"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Bem-vindo ao
            <span className="block text-rose-400 mt-2">Florescer Integrativo</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Um espaço acolhedor dedicado ao cuidado emocional e ao bem-estar da comunidade.
            Aqui você encontra escuta empática, apoio genuíno e ferramentas para transformar sua vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('agendamento')}
              className="bg-rose-400 hover:bg-rose-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105"
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
