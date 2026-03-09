import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const roles = [
  "Director of Engineering",
  "Builder of High-Performance Teams",
  "Systems Thinker",
  "Fast Learner",
  "Problem Solver",
  "Ultimately an Engineer at Heart",
];

type Phase = "typing" | "pausing" | "deleting";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay: number;

    switch (phase) {
      case "typing":
        if (text.length < currentRole.length) {
          delay = 80;
        } else {
          delay = 2000;
        }
        break;
      case "pausing":
        delay = 0;
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
  }, [text, phase, roleIndex]);

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.greeting}>Hi, my name is</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className={styles.name}>Henry Ma.</h1>
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
          <p className={styles.subtitle}>
            I build and lead engineering teams that ship exceptional software.
            Passionate about developer/user experiences, scalable systems, and
            nurturing engineering culture.
          </p>
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a href="#projects" className={styles.ctaPrimary}>
            View My Work
          </a>
          <a href="#contact" className={styles.ctaSecondary}>
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
