import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, MapPin, Clock, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t.contact.form.success });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="animate-on-scroll font-display text-5xl md:text-6xl text-center text-gradient-gold mb-10 tracking-wider">
          {t.contact.title}
        </h2>

        {/* Direct contact highlight */}
        <div className="animate-on-scroll delay-1 max-w-lg mx-auto text-center p-8 mb-12 rounded-lg border-glow bg-card shadow-rock">
          <h3 className="font-display text-2xl text-foreground tracking-wide mb-2">
            {t.contact.directContact}
          </h3>
          <a
            href="tel:+541134239865"
            className="block font-display text-5xl text-primary my-4 hover:text-primary/80 transition-colors animate-pulse-glow rounded-lg py-2"
          >
            11 3423-9865
          </a>
          <p className="text-muted-foreground">{t.contact.personalAttention}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Info */}
          <div className="animate-on-scroll delay-2 space-y-6 p-6 rounded-lg bg-card border-glow">
            <h3 className="font-display text-2xl text-foreground tracking-wide">{t.contact.info}</h3>
            {[
              { icon: MapPin, text: t.contact.zone },
              { icon: Clock, text: t.contact.hours },
              { icon: Truck, text: t.contact.deliveryZone },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="animate-on-scroll delay-3 space-y-4 p-6 rounded-lg bg-card border-glow">
            <Input
              placeholder={t.contact.form.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-secondary border-border"
            />
            <Input
              type="email"
              placeholder={t.contact.form.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-secondary border-border"
            />
            <Input
              type="tel"
              placeholder={t.contact.form.phone}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-secondary border-border"
            />
            <Textarea
              placeholder={t.contact.form.message}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="bg-secondary border-border"
            />
            <Button type="submit" className="w-full rounded-full shadow-rock">
              {t.contact.form.submit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
