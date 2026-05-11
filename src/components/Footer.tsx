export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-4">
            <img
              src="/image.png"
              alt="Florescer Integrativo"
              className="h-16 w-auto mx-auto"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Florescer Integrativo</h3>
          <p className="text-gray-400 mb-4">Terapia Comunitária Integrativa</p>

          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <a href="tel:+5511980317304" className="text-gray-300 hover:text-rose-400 transition-colors">
              (11) 98031-7304
            </a>
            <span className="text-gray-600">•</span>
            <a href="mailto:florescerintegrativo1@gmail.com" className="text-gray-300 hover:text-rose-400 transition-colors">
              florescerintegrativo1@gmail.com
            </a>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Florescer Integrativo. Todos os direitos reservados.
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
