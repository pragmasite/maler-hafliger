import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/images/img-2.jpg",
      de: "Farbdesign",
      en: "Color Design",
    },
    {
      src: "/images/img-3.jpg",
      de: "Innenrenovation",
      en: "Interior Renovation",
    },
    {
      src: "/images/img-4.jpg",
      de: "Fassadenarbeit",
      en: "Facade Work",
    },
    {
      src: "/images/img-5.jpg",
      de: "Akzentwand",
      en: "Accent Wall",
    },
    {
      src: "/images/img-6.jpg",
      de: "Feature-Wall",
      en: "Feature Wall",
    },
  ];

  const getDescription = (image: typeof galleryImages[0]) => {
    return lang === "de" ? image.de : image.en;
  };

  return (
    <section id="galerie" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">
            {t.gallery.title}
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-foreground/5"
            >
              <img
                src={image.src}
                alt={getDescription(image)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white">
                  {getDescription(image)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              <img
                src={galleryImages[selectedIndex].src}
                alt={getDescription(galleryImages[selectedIndex])}
                className="w-full h-auto rounded-lg"
              />

              <div className="mt-4 text-center text-white">
                <p className="text-lg">
                  {getDescription(galleryImages[selectedIndex])}
                </p>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() =>
                  setSelectedIndex(
                    selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
                  )
                }
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-accent transition-colors"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={() =>
                  setSelectedIndex(
                    selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1
                  )
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-accent transition-colors"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
