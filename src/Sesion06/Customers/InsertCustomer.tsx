import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import axiosClient from "../configs/axiosClient";
import { message } from "antd";

interface IFormInput {
  firstName: string;
  lastName?: string;
  phoneNumber?: string;
  address?: string;
  birthday?: string;
  email: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string(),
  phoneNumber: yup.string(),
  address: yup.string(),
  birthday: yup.string(),
  email: yup.string().email().required(),
});
export default function InsertCustomer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axiosClient.post("/online-shop/customers", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      if (response.status === 201) {
        message.success("Insert successfully");
      }
      console.log(response);
    } catch (err: any) {
      // console.error(err.response.data.message[0]);
      message.error(err.response.data.message[0]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 320,
            gap: 12,
          }}
        >
          {/* firstName */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="firstName">FirstName</label>
            <input {...register("firstName")} id="firstName" />
            <span>{errors.firstName?.message}</span>
          </div>

          {/* lastName */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="lastName">LastName</label>
            <input {...register("lastName")} id="lastName" />
            <span>{errors.lastName?.message}</span>
          </div>
          {/* phoneNumber */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="phoneNumber">PhoneNumber</label>
            <input {...register("phoneNumber")} id="phoneNumber" />
            <span>{errors.phoneNumber?.message}</span>
          </div>
          {/* address */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="address">Address</label>
            <input {...register("address")} id="address" />
            <span>{errors.address?.message}</span>
          </div>
          {/* birthday */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="birthday">Birthday</label>
            <input {...register("birthday")} id="birthday" />
            <span>{errors.birthday?.message}</span>
          </div>
          {/* email */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">Email</label>
            <input {...register("email")} id="email" />
            <span>{errors.email?.message}</span>
          </div>

          {/* SUBMIT */}
          <button type="submit" name="Submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
