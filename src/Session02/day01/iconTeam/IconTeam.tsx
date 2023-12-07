import React from "react";
import style from "./IconTeam.module.css";

type Props = {
  textName?: string;
  textNumber?: string;
  img?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export default function iconTeam({
  textName = "",
  textNumber = "",
  img = "",
  icon,
  iconRight,
}: Props) {
  const shouldDisplayTextNumber = textNumber && textNumber.trim().length > 0;
  return (
    <div className={style.container}>
      <div className={style.containerAvatar}>
        <img className={style.avatar} src={img} alt="" />
      </div>
      <div className={style.text}>
        <p className={style.textItem}>{textName}</p>
        <div className={style.textName}>
          <div className={style.icon}>{icon}</div>
          <div className={style.textNumber}>{textNumber}</div>
          <div className={style.iconRight}>{iconRight}</div>
        </div>
      </div>
    </div>
  );
}
