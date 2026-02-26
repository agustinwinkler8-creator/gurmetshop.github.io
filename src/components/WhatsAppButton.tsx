import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const phoneNumber = '541134239865';
  const message = encodeURIComponent(t.whatsapp.message);
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-organic text-organic-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-whatsapp-pulse"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
