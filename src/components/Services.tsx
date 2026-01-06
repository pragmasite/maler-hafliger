import { motion } from "framer-motion";
import { Brush, Palette, Wrench, Hammer } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  const icons = [Brush, Palette, Wrench, Hammer, Brush, Palette];

  return (
    <section id="dienstleistungen" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.services.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4 mb-6">
            {t.services.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.services.items.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-background rounded-lg p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-accent/10 transition-colors">
                  <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-serif text-xl mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
