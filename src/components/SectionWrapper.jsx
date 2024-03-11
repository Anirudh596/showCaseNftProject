import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "../components/Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        }`}
      >
        <div
          className={`${styles.descDiv} ${
            reverse ? "fadeRightMini" : "fadeLeftMini"
          } 
          ${reverse ? styles.textRight : styles.textLeft}`}
        >
          <h1
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}
          >
            {title}
          </h1>
          <p
            className={` ${styles.descriptionText}  ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              Link="https://expo.dev/accounts/anytheboss/projects/anift/updates/00025ea7-e81a-4249-a408-2beed00cc831"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img src={mockupImg} alt="Mockup" className={`${styles.sectionImg} ${
            reverse ? "fadeLeftMini" : "fadeRightMini"
          }`} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
