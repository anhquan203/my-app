import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import axiosClient from "../configs/axiosClient";

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

export default function UpdateCustomer() {
  const refButton = React.useRef<any>(null);
  // Refresh state
  const [refresh, setRefresh] = React.useState(false);

  // Loading state
  const [loading, setLoading] = React.useState(false);
  const [customers, setCustomers] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState<number>(-1);

  // Chạy 1 lần duy nhất khi component được render lần đầu tiên
  React.useEffect(() => {
    // Async / Await

    const getData = async () => {
      try {
        setLoading(true);
        const response: any = await axiosClient.get("/online-shop/customers");
        setCustomers(response.data);
      } catch (error) {
        console.log("Failed to fetch data: ", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [refresh]);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axiosClient.patch(
        "/online-shop/customers/" + selectedId,
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      console.log(response);

      setRefresh(!refresh);
      refButton.current?.click();
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Update data with Axios</h2>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th>STT</th>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>Birthday</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer: any, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{customer.id}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.birthday}</td>

                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      console.log(customer);
                      setSelectedId(customer.id);
                      setValue("firstName", customer.firstName);
                      setValue("lastName", customer.lastName);
                      setValue("email", customer.email);
                      setValue("address", customer.address);
                      setValue("phoneNumber", customer.phoneNumber);
                      setValue("birthday", customer.birthday);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  ref={refButton}
                ></button>
              </div>
              <div className="modal-body">
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
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
