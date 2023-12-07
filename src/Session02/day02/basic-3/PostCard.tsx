import React from "react";
import styles from "./PostCard.module.css";

type Props = {
  img?: string;
  category?: string;
  title?: string;
  date?: string;
  author?: string;
};

export default function PostCard({
  img,
  category,
  title,
  date,
  author,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt="post" />
      </div>
      <div className={styles.content}>
        <div className={styles.category}>{category}</div>
        <h2>{title}</h2>
        <div>
          <span className={styles.date}>{date} </span>
          <span style={{ color: "#adadad" }}>by </span>
          <span className={styles.author}>{author}</span>
        </div>
      </div>
    </div>
  );
}
