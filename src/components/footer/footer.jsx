import React from "react";


import InstaIcon from "../../constant/Icons/Instaıcon";
import GithubIcon from "../../constant/Icons/GithubIcon";
import LinkedinIcon from '../../constant/Icons/LinkedinIcon';
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
            
            <InstaIcon  className={styles.ıcon}/>
            Instagram
          </div>
        </a>
        <a href="https://github.com/furkanerr" target="_blank" rel="noreferrer">
          <div className={styles.git}>
           
            <GithubIcon className={styles.ıcon}/>
            Github
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/furkaner0/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.linkedin}>
            
            <LinkedinIcon className={styles.ıcon}/>
            Linkedin
          </div>
        </a>
      </article>
    </main>
  );
};

export default Footer;
