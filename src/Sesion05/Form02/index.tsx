import React from "react";
import styles from "./form02.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneNumber: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  confirmPasword: yup.string().required(),
});
type userForm = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPasword: string;
};
export default function Form02() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<userForm> = (data) => console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <div className="row d-flex ml-3 mt-5 text-center">
          <img src="img/Form/Form02/2.png" alt="" />
          <span className="ml-3 font-weight-bold text-white align-items-center mt-3">
            Lottery Display
          </span>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <span className="text-justify text-white  ">
            A few clicks away from creating your Lottey Display
          </span>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <img src="img/Form/Form02/1.png" alt="" />
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className="row ml-2 mb-5">
          <h2>Register</h2>
        </div>
        <div className="row ml-2 ">
          <p className="font-weight-bold">Manage all your</p>
        </div>
        <div className="row ml-2">
          <p className="text-secondary">let's get you</p>
        </div>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                {...register("firstName")}
                id="firstName"
                className="form-control"
                type="text"
              />
              <p>{errors.firstName?.message}</p>
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register("lastName")}
                id="lastName"
                className="form-control"
                type="text"
              />
              <p>{errors.lastName?.message}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                {...register("phoneNumber")}
                id="phoneNumber"
                className="form-control"
                type="text"
              />
              <p>{errors.phoneNumber?.message}</p>
            </div>
            <div className="col-md-6">
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                id="email"
                className="form-control"
                type="text"
              />
              <p>{errors.email?.message}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="password">Password</label>
              <input
                {...register("password")}
                id="password"
                className="form-control"
                type="text"
              />
              <p>{errors.password?.message}</p>
            </div>
            <div className="col-md-6">
              <label htmlFor="confirmPasword">Confirm Pasword</label>
              <input
                {...register("confirmPasword")}
                id="confirmPasword"
                className="form-control"
                type="text"
              />
              <p>{errors.confirmPasword?.message}</p>
            </div>
          </div>
          <div className="row ml-2 mt-3">
            <div className="col-md-12">
              <input className="form-check-input" type="checkbox" />
              <label>Yes, I want to receive lottery Disphay </label>
            </div>
          </div>
          <div className="row ml-2">
            <div className="col-md-12">
              <input className="form-check-input" type="checkbox" />
              <label>
                I agree to all the
                <a className="text-primary"> term</a>, <a>Privacy Policy</a> and
                <a className="text-primary"> Fees </a>
              </label>
            </div>
          </div>
          <div className="row mt-3 ml-2">
            <button className="btn btn-primary">Create Account</button>
          </div>
          <div className="row mt-3 ml-2">
            <p className="text-center mt-1">
              Already have an account? <a className="text-primary">Log in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
