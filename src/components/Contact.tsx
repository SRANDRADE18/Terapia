import { Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-16 px-4 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600">
            Estou aqui para ouvir você. Escolha a melhor forma de contato.
          </p>
          <div className="w-20 h-1 bg-rose-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>

            <div className="space-y-4">
              <a
                href="https://wa.me/5511980317304"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-rose-50 rounded-xl hover:bg-rose-100 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">(11) 98031-7304</p>
                  <p className="text-sm text-rose-400 mt-1">Clique para conversar</p>
                </div>
              </a>

              <a 
                href="mailto:florescerintegrativo1@gmail.com"
                className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                  <p className="text-gray-600">florescerintegrativo1@gmail.com</p>
                  <p className="text-sm text-amber-600 mt-1">Clique para enviar um e-mail</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Localização</h4>
                  <p className="text-gray-600">São Paulo, SP - Brasil</p>
                  <p className="text-sm text-gray-500 mt-1">Atendimento presencial e online</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Redes Sociais</h3>
            <p className="text-gray-600 mb-6">
              Acompanhe meu trabalho e receba dicas de bem-estar e saúde mental nas redes sociais.
            </p>

            <div className="space-y-4">
              <a
                href="https://www.instagram.com/florescerintegrativo1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Instagram</h4>
                  <p className="text-sm text-gray-600">@florescerintegrativo_</p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/FlorescerIntegrativo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Facebook</h4>
                  <p className="text-sm text-gray-600">Florescer Integrativo</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/maria-iracelma-santos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                  <p className="text-sm text-gray-600">Maria Iracelma</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Horário de Atendimento
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="p-4 bg-rose-50 rounded-xl">
              <p className="font-semibold text-gray-800">Segunda a Sexta</p>
              <p className="text-gray-600">09:00 - 17:00</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl">
              <p className="font-semibold text-gray-800">Sábados</p>
              <p className="text-gray-600">Sob agendamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
