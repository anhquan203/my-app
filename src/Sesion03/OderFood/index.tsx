import React from "react";
import styles from "./OderFood.module.css";

type Props = {};

export default function OderFood({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.bgrImg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="375"
            height="437"
            viewBox="0 0 375 437"
            fill="none"
          >
            <path
              d="M375 0V374.127C323 413.547 257.9 437 187.6 437C117.2 437 53 413.447 0 373.927V0H375Z"
              fill="#FF5C01"
              fill-opacity="0.2"
            />
          </svg>
        </div>
        <div className={styles.containerCircle}>
          <img className={styles.iconHeader} src="img/Appfood/02.png" alt="" />
          <img className={styles.imgFood} src="img/Appfood/1.png" alt="" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.textTillte}> Choose a Favourite Food</div>
        <div className={styles.textBlur}>
          When you oder Eat Steet, we’ll hook you up with exclusive coupon,
          specials and rewards
        </div>
        <div className={styles.containerTab}> icon</div>
        <div className={styles.containerFoodter}>
          <div className={styles.containerSkip}>skip</div>
          <button className={styles.buttonNext}> next</button>
        </div>
      </div>
    </div>
  );
}
