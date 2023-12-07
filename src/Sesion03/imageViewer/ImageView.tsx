import React from "react";
import style from "./ImageView.module.css";

type Props = {
  images: string[]; // Mảng chứa đường dẫn đến các hình ảnh
};

export default function ImageView({ images }: Props) {
  const [index, setIndex] = React.useState(0); // Sử dụng index bắt đầu từ 0
  const maxImageCount = images.length;

  // Kiểm tra nếu mảng hình ảnh rỗng hoặc chỉ số không hợp lệ
  if (maxImageCount === 0 || index < 0 || index >= maxImageCount) {
    return <div>No images available</div>;
  }

  const imagePath = images[index];

  return (
    <div>
      <img className={style.imageBig} src={imagePath} alt="" />
      <div className={style.containerBody}>
        <div className={style.thumbnailContainer}>
          {images.map((image, ind) => (
            <img
              key={ind}
              className={`${style.thumbnail} ${
                ind === index ? style.selected : ""
              }`}
              src={image}
              alt=""
              onClick={() => setIndex(ind)}
            />
          ))}
        </div>
      </div>
      <div className={style.containerBody}>
        <button
          disabled={index === 0}
          style={{ backgroundColor: index === 0 ? "gray" : "blueviolet" }}
          className={style.button}
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          Previous
        </button>
        <div>
          {index + 1}/{maxImageCount} {/* Hiển thị chỉ số bắt đầu từ 1 */}
        </div>
        <button
          disabled={index === maxImageCount - 1}
          style={{
            backgroundColor:
              index === maxImageCount - 1 ? "gray" : "blueviolet",
          }}
          className={style.button}
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
