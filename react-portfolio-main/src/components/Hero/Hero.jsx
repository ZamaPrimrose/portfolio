import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm Zama Primrose Mlambo
        </h1>
        <p className={styles.description}>
          I'm a passionate Full-Stack Developer with over 6 months of hands-on experience
          building responsive, scalable web applications using React and Node.js.
          I enjoy crafting clean, efficient code and bringing ideas to life on
          both the front and back end.
          <br /><br />
          Let’s connect if you're looking for a developer who’s driven,
          detail-oriented, and always learning.
        </p>

        <div className={styles.buttonGroup}>
          <a href="mailto:zamasondiya7@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href={getImageUrl("hero/InnocentResume.pdf")}
            download
            className={styles.downloadBtn}
          >
            Download CV
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/photo.jpg")}
        alt="Illustration of developer at work"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
