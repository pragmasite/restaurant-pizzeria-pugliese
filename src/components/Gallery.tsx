import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "/images/img-1.jpg", alt: lang === "fr" ? "Antipasti et fritti" : "Appetizers and fried" },
    { src: "/images/img-2.jpg", alt: lang === "fr" ? "Terrasse élégante" : "Elegant terrace" },
    { src: "/images/img-3.jpg", alt: lang === "fr" ? "Salle en plein air" : "Al fresco dining" },
    { src: "/images/img-4.jpg", alt: lang === "fr" ? "Fruits de mer frais" : "Fresh seafood" },
    { src: "/images/img-5.jpg", alt: lang === "fr" ? "Fritto misto croustillant" : "Crispy fritti misto" },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galerie" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">{t.gallery.title}</h2>
          </motion.div>

          {/* Slider for 5 images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video overflow-hidden rounded-2xl"
            >
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activeIndex ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
              <div className="absolute bottom-4 left-4 right-4 bg-foreground/80 backdrop-blur px-4 py-2 rounded-lg">
                <p className="text-white text-sm font-medium">{images[activeIndex].alt}</p>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Thumbnails */}
            <div className="mt-8 flex gap-4 justify-center overflow-x-auto pb-2">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    activeIndex === index ? "border-accent" : "border-border"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
