import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const schedule = [
    { hours: "10:30 - 14:00 / 17:30 - 22:00" },
    { hours: "10:30 - 14:00 / 17:30 - 22:00" },
    { hours: "10:30 - 14:00 / 17:30 - 22:00" },
    { hours: "10:30 - 14:00 / 17:30 - 22:00" },
    { hours: "10:30 - 14:00 / 17:30 - 23:30" },
    { hours: "17:30 - 23:30" },
    { hours: t.hours.closed },
  ];

  const todayIndex = new Date().getDay();

  return (
    <section id="horaires" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-sm uppercase tracking-widest text-primary">{t.hours.label}</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">{t.hours.title}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl rounded-2xl border bg-card shadow-soft overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold">{t.hours.header}</span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                    className={`px-6 py-4 flex justify-between items-center ${isToday ? "bg-primary/5" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />}
                      <span className={`font-medium ${isToday ? "text-primary" : "text-foreground"}`}>
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span className={isClosed ? "text-muted-foreground" : "font-medium"}>{item.hours}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hours;
