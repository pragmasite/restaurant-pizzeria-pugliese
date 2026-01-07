import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">
              {t.contact.title1} <span className="text-accent">{t.contact.title2}</span>
            </h2>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-lg text-muted-foreground">{t.contact.description}</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t.contact.phone}</p>
                    <a href="tel:+41324227700" className="font-semibold hover:text-accent transition">
                      +41 32 422 77 00
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t.contact.email}</p>
                    <a href="mailto:restaurant.pugliese.vb@gmail.com" className="font-semibold hover:text-accent transition break-all">
                      restaurant.pugliese.vb@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t.contact.address}</p>
                    <p className="font-semibold">
                      Route de la Communance 12<br />
                      2800 Délémont, CH
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="w-full sm:w-auto mt-8">
                <a href="tel:+41324227700">
                  <Phone className="mr-2 h-5 w-5" />
                  {t.contact.cta}
                </a>
              </Button>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-medium h-96"
            >
              <iframe
                title="Restaurant location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.9548476523!2d7.342887!3d47.356824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479196f6f3f3f3f3%3A0x1a1a1a1a1a1a1a1a!2sRoute%20de%20la%20Communance%2012%2C%202800%20Delmont!5e0!3m2!1sen!2sch!4v1234567890"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
