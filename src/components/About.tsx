import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="a-propos" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">
              {t.about.title1} <span className="text-accent">{t.about.title2}</span>
            </h2>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-foreground/80 mb-6">{t.about.p1}</p>
              <p className="text-lg text-foreground/80">{t.about.p2}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "15+", label: t.about.stat1 },
                { value: "100%", label: t.about.stat2 },
                { value: "500+", label: t.about.stat3 },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-lg bg-background border border-border ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}
                >
                  <div className="font-serif text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Features */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.about.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  <span className="text-2xl font-serif text-accent">{i + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
