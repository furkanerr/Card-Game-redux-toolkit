import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

//styles
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <main className={styles.container}>
      <article className={styles.social}>
        <a
          href="https://www.instagram.com/furkanerdev/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.insta}>
            <FontAwesomeIcon className={styles.ıcon} icon={faInstagram} />
            Instagram
          </div>
        </a>
        <a href="https://github.com/furkanerr" target="_blank" rel="noreferrer">
          <div className={styles.git}>
            <FontAwesomeIcon className={styles.ıcon} icon={faGithub} />
            Github
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/furkaner0/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.linkedin}>
            <FontAwesomeIcon className={styles.ıcon} icon={faLinkedin} />
            Linkedin
          </div>
        </a>
      </article>
    </main>
  );
};

export default Footer;
