import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Truck, Award, Leaf, Heart } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useScrollAnimation();

  const values = [
    { icon: Truck, ...t.about.values.delivery },
    { icon: Award, ...t.about.values.quality },
    { icon: Leaf, ...t.about.values.natural },
    { icon: Heart, ...t.about.values.local },
  ];

  return (
    <section id="nosotros" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="animate-on-scroll font-display text-5xl md:text-6xl text-center text-gradient-gold mb-10 tracking-wider">
            {t.about.title}
          </h2>

          <div className="animate-on-scroll delay-1 space-y-4 text-center mb-12">
            <p className="text-lg text-foreground/80 font-medium">{t.about.lead}</p>
            <p className="text-muted-foreground">{t.about.p1}</p>
            <p className="text-muted-foreground">{t.about.p2}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className={`animate-on-scroll delay-${i + 1} text-center p-6 rounded-lg bg-card border-glow shadow-card hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <val.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-lg text-foreground tracking-wide mb-1">{val.title}</h4>
                <p className="text-xs text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
