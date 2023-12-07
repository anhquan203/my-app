import React, { useState } from "react";
import styles from "./FormSingup.module.css";
import Button from "./Button";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import avatarImage from "../../img/LoginApp/avatar.jpg";
import { FiChevronLeft } from "react-icons/fi";
const FormSingup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FiChevronLeft size={30} />
        <h1 className={styles.Item}>Log in</h1>
      </div>

      <form className={styles.formcontainer} onSubmit={handleSubmit}>
        <div className={styles.formsubmit}>
          <div className={styles.textimg}>
            <img
              className={styles.avatar}
              src="img/LoginApp/avatar.jpg"
              alt=""
            />
            <div className={styles.textItem}>
              looks like you don't have an accound. let's create a new accound
              for quan@gmail.com
            </div>
          </div>

          <label>
            <input
              className={styles.forminput}
              type="pasword"
              placeholder="Pasword"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            <button className={styles.button}>Agree and continue</button>
          </label>
          <div>
            <div className={styles.textItem}>
              <p className={styles.textcolor}>
                Teams of Sevice and privacy prolicy
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSingup;
