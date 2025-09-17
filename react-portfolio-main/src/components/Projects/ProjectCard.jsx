import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleDescription = () => {
    setShowFullDesc(!showFullDesc);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p
        className={`${styles.description} ${
          showFullDesc ? styles.show : styles.hide
        }`}
      >
        {description}
      </p>
      {description.length > 100 && (
        <button className={styles.toggleBtn} onClick={toggleDescription}>
          {showFullDesc ? "Show less" : "Show more"}
        </button>
      )}
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          Source
        </a>
      </div>
    </div>
  );
};
