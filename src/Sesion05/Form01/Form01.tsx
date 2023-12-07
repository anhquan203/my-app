import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import avatarImage from "../../img/LoginApp/avatar.jpg";
import { FiChevronLeft } from "react-icons/fi";
const Form01 = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FiChevronLeft size={30} />
        <h1 className={styles.Item}>Hi</h1>
      </div>

      <form className={styles.formcontainer} onSubmit={handleSubmit}>
        <div className={styles.formsubmit}>
          <label>
            <input
              className={styles.forminput}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <div>
            <Button text="Login" />
          </div>
          <div style={{ fontSize: 20, color: "black" }}>or</div>
          <div>
            <Button
              text="Continue With Facebook"
              iconLeft={<FaFacebook size={30} style={{ color: "blue" }} />}
            />
            <Button
              text="Continue With Google"
              iconLeft={<FcGoogle size={30} style={{ color: "blue" }} />}
            />
            <Button
              text="Continue With Apple"
              iconLeft={<AiFillApple size={30} style={{ color: "black" }} />}
            />
            <div className={styles.textItem}>
              <p>don't have an account?</p>
              <p className={styles.textcolor}> Sign up</p>
            </div>
            <div className={styles.textItem}>
              <p className={styles.textcolor}>Forgot your password</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form01;
