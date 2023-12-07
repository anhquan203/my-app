import React from "react";
import style from "./IconTour.module.css";

type Props = {
  textname?: string;
  textday?: string;
  textitem?: string;
  avatar?: string;
  icon?: React.ReactNode;
};

export default function IconTour({
  textday = "",
  textitem = "",
  textname = "",
  avatar = "",
  icon,
}: Props) {
  const isTextDayNotEmpty = textday && textday.trim() !== ""; // Kiểm tra xem textday có giá trị hay không
  return (
    <div className={style.container}>
      <div>
        <img className={style.avatar} src={avatar} alt="" />
        <div className={style.containerBody}>
          <div
            className={`${style.textName} ${
              isTextDayNotEmpty ? style.textNameBlur : style.textName
            }`}
          >
            {textname}
          </div>
          <div className={style.textItem}>
            <div>{textitem}</div>
            <div className={style.textDay}>{textday}</div>
          </div>
        </div>
      </div>
      <div className={style.icon}> {icon}</div>
    </div>
  );
}
