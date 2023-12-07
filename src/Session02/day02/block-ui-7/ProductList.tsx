import React from "react";
import styles from "./ProductList.module.css";
import RankBar from "./RankBar";
import Ratting from "./Ratting";
type Props = {
  testDiscount?: string;
  img?: string;
  textnameShop?: string;
  textPrice?: string;
  TextOldprice?: string;
  textSale?: string;
  textNameproduct?: string;
  textSold?: string;
  rating?: number;
};

export default function ProductList({
  testDiscount = "",
  textNameproduct = "",
  textPrice,
  textSale = "",
  TextOldprice,
  textSold,
  textnameShop,
  img,
  rating,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.discount}>{testDiscount}</div>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.shop}>{textnameShop}</div>
        <hr />
        <div className={styles.prices}>
          <div className={styles.price}>${textPrice}</div>
          <del className={styles.oldPrice}>${TextOldprice}</del>
          <div className={styles.sale}>{textSale}</div>
        </div>
        <div className={styles.name}>{textNameproduct}</div>
        <div className={styles.rate}>
          <Ratting ratting={rating} />
          <RankBar color="orange" rank={80} />
        </div>
        <div className={styles.inventory}>Sold: {textSold}</div>
      </div>
    </div>
  );
}
