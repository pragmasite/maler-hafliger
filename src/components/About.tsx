import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="uber-uns" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.about.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">
            {t.about.title1}
            <br />
            <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {t.about.p1}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              { value: "20+", label: t.about.stat1 },
              { value: "500+", label: t.about.stat2 },
              { value: "100", label: t.about.stat3 },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-serif text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {t.about.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 shadow-soft"
            >
              <h3 className="font-serif text-xl mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
