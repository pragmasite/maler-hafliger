import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 218 4809",
      href: "tel:+41792184809",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "info@maler-hafliger.ch",
      href: "mailto:info@maler-hafliger.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Kirchgasse 74, 3812 Wilderswil",
      href: "https://maps.google.com/?q=Kirchgasse+74,+3812+Wilderswil",
    },
  ];

  return (
    <section id="kontakt" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-6">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground">
                      {item.label}
                    </h3>
                    <p className="text-foreground/70 text-sm">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-medium"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.844521858305!2d7.867913!3d46.664998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4893ee5d0c5d5555%3A0xabc123!2sKirchgasse%2074%2C%203812%20Wilderswil!5e0!3m2!1sde!2sch!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maler Häfliger Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
