export const sendWhatsAppAlert = async (message: string) => {
  const phone = import.meta.env.VITE_CALLMEBOT_PHONE;
  const apikey = import.meta.env.VITE_CALLMEBOT_APIKEY;

  // Se a chave não estiver configurada ainda, não faz nada
  if (!phone || !apikey || apikey === 'COLE_A_CHAVE_AQUI_QUANDO_RECEBER') {
    console.warn('WhatsApp API Key não configurada. Alerta não enviado:', message);
    return;
  }

  try {
    // A API do CallMeBot exige que a mensagem seja formatada para URL (sem espaços ou caracteres especiais puros)
    const encodedMessage = encodeURIComponent(message);
    
    // O CallMeBot bloqueia requisições vindas direto do navegador (CORS),
    // então usamos o parâmetro 'no-cors' para apenas "disparar e esquecer" (fire and forget)
    await fetch(`https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodedMessage}&apikey=${apikey}`, {
      method: 'GET',
      mode: 'no-cors'
    });
    
    console.log('Alerta enviado para o WhatsApp.');
  } catch (error) {
    console.error('Erro ao enviar alerta via WhatsApp:', error);
  }
};
