import React from "react";
import styles from "./RateButton.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
type Props = { ratting?: number };

export default function Ratting({ ratting = 5 }: Props) {
  const [star, setRatting] = React.useState(ratting);
  return (
    <div className={styles.container}>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <div
            className={styles.ratting}
            key={index}
            onClick={() => {
              setRatting(item);
            }}
          >
            {star >= item ? (
              <AiFillStar color="orange" />
            ) : (
              <AiOutlineStar color="grey" />
            )}
          </div>
        );
      })}
    </div>
  );
}
