import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mb-4">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Espaço de Terapia Comunitária</h3>
          <p className="text-gray-400 mb-4">Ana Paula Silva</p>

          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <a href="tel:+5511999999999" className="text-gray-300 hover:text-green-400 transition-colors">
              (11) 99999-9999
            </a>
            <span className="text-gray-600">•</span>
            <a href="mailto:contato@terapiacomunitaria.com.br" className="text-gray-300 hover:text-green-400 transition-colors">
              contato@terapiacomunitaria.com.br
            </a>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Espaço de Terapia Comunitária. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Atendimento presencial e online • São Paulo, SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
