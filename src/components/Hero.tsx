import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import styles from "./Hero.module.css";

type Phase = "typing" | "deleting";

export default function Hero() {
  const { t, tArray } = useLanguage();
  const roles = tArray("hero.roles");

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const prevRolesRef = useRef(roles);

  useEffect(() => {
    if (prevRolesRef.current !== roles) {
      prevRolesRef.current = roles;
      setRoleIndex(0);
      setText("");
      setPhase("typing");
    }
  }, [roles]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay: number;

    switch (phase) {
      case "typing":
        delay = text.length < currentRole.length ? 80 : 2000;
        break;
      case "deleting":
        delay = 40;
        break;
    }

    const timeout = setTimeout(() => {
      switch (phase) {
        case "typing":
          if (text.length < currentRole.length) {
            setText(currentRole.slice(0, text.length + 1));
          } else {
            setPhase("deleting");
          }
          break;
        case "deleting":
          if (text.length > 0) {
            setText(currentRole.slice(0, text.length - 1));
          } else {
            setRoleIndex((prev) => (prev + 1) % roles.length);
            setPhase("typing");
          }
          break;
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex, roles]);

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.greeting}>{t("hero.greeting")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className={styles.name}>{t("hero.name")}</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.typingLine}>
            <span className={styles.typedText}>{text}</span>
            <span className={styles.cursor}>|</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className={styles.subtitle}>{t("hero.subtitle")}</p>
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a href="#projects" className={styles.ctaPrimary}>
            {t("hero.ctaPrimary")}
          </a>
          <a href="#contact" className={styles.ctaSecondary}>
            {t("hero.ctaSecondary")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
