import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

type Props = {};
type userForm = {
  username: string;
  password: string;
};

export default function Login({}: Props) {
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
        localStorage.setItem("access_token", response.data.access_token);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };
    login();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div>
          <label htmlFor="UserName"> UserName</label>
          <input
            id="UserName"
            className="form-control"
            placeholder="UserName"
            {...register("username")}
          />
        </div>
        <div>
          <label htmlFor="Password"> Password</label>
          <input
            id="Password"
            className="form-control"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <div>
          <button className=" btn btn-primary btn-block mt-3">Login</button>
        </div>
      </form>
    </div>
  );
}
