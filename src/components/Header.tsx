import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'agendamento', label: 'Agendar' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-left hidden sm:block">
              <h1 className="text-lg font-bold text-gray-800">Terapia Comunitária</h1>
              <p className="text-xs text-gray-600">Maria Iracelma</p>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('agendamento')}
            className="hidden md:block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-all transform hover:scale-105"
          >
            Agendar Consulta
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col gap-2">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 text-left text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('agendamento')}
                className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full text-center transition-all"
              >
                Agendar Consulta
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
