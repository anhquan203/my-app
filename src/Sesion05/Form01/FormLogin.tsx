import React, { useState } from "react";
import styles from "./FormLogin.module.css";
import Button from "./Button";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import avatarImage from "../../img/LoginApp/avatar.jpg";
import { FiChevronLeft } from "react-icons/fi";
const FormLogin = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FiChevronLeft size={30} />
        <h1 className={styles.Item}>Singin</h1>
      </div>

      <form className={styles.formcontainer} onSubmit={handleSubmit}>
        <div className={styles.formsubmit}>
          <div className={styles.textItem}>
            looks like you don't have an accound. let's create a new accound for
            quan@gmail.com
          </div>

          <input
            className={styles.forminput}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className={styles.forminput}
            type="pasword"
            placeholder="PassWord"
          />

          <div>
            <div className={styles.textItem}>
              <p>
                By selecting Agree and continute below, I agree to{" "}
                <p className={styles.textcolor}>
                  Teams of Sevice and privacy prolicy
                </p>
              </p>
            </div>
            <button className={styles.button}>Agree and continue</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
