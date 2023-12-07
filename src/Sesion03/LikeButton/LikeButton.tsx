import React, { useState } from "react";
import "./likeButtion.module.css";
import { BiLike } from "react-icons/bi"; // Import file CSS

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // Đảo ngược trạng thái khi nút được nhấn
  };

  return (
    <button
      className={`like-button ${isLiked ? "liked" : ""}`}
      onClick={handleLikeClick}
    >
      {isLiked ? (
        <BiLike size={30} />
      ) : (
        <BiLike size={30} style={{ color: "#171dc4" }} />
      )}{" "}
      {/* Hiển thị văn bản tùy thuộc vào trạng thái */}
    </button>
  );
};

export default LikeButton;
