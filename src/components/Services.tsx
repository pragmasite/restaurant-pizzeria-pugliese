import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-sm uppercase tracking-widest text-primary">{t.services.label}</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">{t.services.description}</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
                className="group p-8 rounded-lg border border-border bg-card hover:bg-primary/5 hover:border-primary transition-all cursor-pointer"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
