import React from "react";
import styles from "./Form03.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

type Props = {};
type userForm = {
  username: string;
  password: string;
};

export default function Form03({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<userForm> = (data) => {
    const url = "https://server.aptech.io/auth/login";
    console.log(data);
    const login = async () => {
      try {
        const response = await axios.post(url, data);
        alert("login thành công");
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };
    login();
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <div className="container text-center">
          <div className="row mt-5">
            <span className={styles.textItem}>set your Partner</span>
          </div>
          <div className="row">
            <span className={styles.textItemp}>Recruitment on Auto-Pilot</span>
          </div>
          <div className={styles.img}>
            <img
              className="img-fluid mx-auto d-block"
              src="img/Form/Form02/4.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className="row align-items-center">
          <div className="col-2">
            <img src="img/Form/Form02/3.png" alt="" className="img-fluid" />
          </div>
          <div className="col-10">
            <h2 className="font-weight-bold">Grovia</h2>
          </div>
        </div>

        <div className="row mt-5">
          <span className="font-weight-bold text-danger">Login</span>
        </div>
        <div className="row mt-5">
          <span className="font-weight-bold ">Login to your account</span>
        </div>
        <div className="row mt-3">
          <span> thanh you for get back to Grovia, lest</span>
        </div>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <label htmlFor="">Username</label>
            <input
              {...register("username")}
              className="form-control"
              type="text"
              placeholder="Email or Phone Number"
            />
            <p>{errors.username?.message}</p>
          </div>
          <div className="row">
            <label htmlFor="">Password</label>
            <input
              {...register("password")}
              className="form-control"
              type="text"
              placeholder="Password"
            />
            <p>{errors.password?.message}</p>
          </div>
          <div className="row  justify-content-between mt-4    ">
            <div>
              <input type="checkbox" name="" id="" />
              <span className="ml-2">Remember me</span>
            </div>
            <a className="text-danger">Reset Password?</a>
          </div>
          <div className="row mt-4">
            <button className="btn btn-primary btn-block">Login</button>
          </div>
          <div className="mt-3">
            <span className="ml-5">
              Don't have an account yet?
              <a className="text-danger"> join Grovia Now</a>{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
