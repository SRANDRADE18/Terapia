import { Info, Sparkles, Calendar, MessageCircle } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'sobre', label: 'Sobre', icon: Info },
    { id: 'servicos', label: 'Serviços', icon: Sparkles },
    { id: 'agendamento', label: 'Agendar', icon: Calendar },
    { id: 'contato', label: 'Contato', icon: MessageCircle }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 lg:py-4">
        
        {/* Linha Principal (Sempre visível) */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 lg:gap-3 group"
          >
            <img
              src="/image.png"
              alt="Florescer Integrativo"
              className="h-10 md:h-12 lg:h-16 w-auto group-hover:scale-105 transition-transform"
            />
            <div className="text-left flex flex-col">
              <h1 className="text-sm md:text-base lg:text-lg font-bold text-gray-800 leading-tight">Florescer Integrativo</h1>
              <p className="text-[10px] lg:text-xs text-gray-600 hidden md:block">Terapia Comunitária Integrativa</p>
            </div>
          </button>

          {/* Navegação Desktop (Aparece a partir de Laptops - lg) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-rose-400 hover:bg-rose-50 rounded-lg font-medium transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Botão Agendar */}
          <button
            onClick={() => scrollToSection('agendamento')}
            className="flex items-center gap-1.5 lg:gap-2 bg-rose-400 hover:bg-rose-500 text-white font-semibold px-4 py-2 lg:px-6 lg:py-2 rounded-full transition-all transform hover:scale-105 text-xs lg:text-base"
          >
            <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="hidden sm:inline">Agendar</span>
            <span className="hidden lg:inline"> Avaliação</span>
            <span className="sm:hidden">Agendar</span>
          </button>
        </div>

        {/* Linha de Navegação Mobile/Tablet (Esconde em Laptops - lg) */}
        <nav className="flex lg:hidden items-center justify-around mt-2 pt-2 border-t border-gray-100">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="p-2 text-gray-600 hover:text-rose-500 transition-colors flex flex-col items-center gap-1"
                title={item.label}
              >
                <Icon className="w-6 h-6" />
                <span className="text-[10px] text-gray-500">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
