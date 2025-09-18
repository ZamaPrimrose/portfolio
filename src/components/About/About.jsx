import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/laptop.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
                I specialize in crafting responsive and optimized websites using 
                modern web technologies. My focus is on delivering clean,
                 maintainable code and intuitive 
                 user interfaces that enhance user engagement.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
               I have hands-on experience developing fast and scalable backend 
               systems and RESTful APIs. I aim to write efficient, secure, and 
               well-structured server-side logic that supports dynamic web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                With a keen eye for design, I enjoy translating 
                ideas into visually appealing and user-centered interfaces 
                that align with branding and usability standards.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
