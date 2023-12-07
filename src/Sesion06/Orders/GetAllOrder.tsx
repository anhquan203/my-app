import React from "react";
import axiosClient from "../configs/axiosClient";
import { date } from "yup";

export default function GetAllOrders() {
  // Loading state
  const [loading, setLoading] = React.useState(false);
  const [Orders, setOrders] = React.useState([]);

  // Chạy 1 lần duy nhất khi component được render lần đầu tiên
  React.useEffect(() => {
    // Async / Await

    const getData = async () => {
      try {
        setLoading(true);
        const response: any = await axiosClient.get("/online-shop/orders");
        setOrders(response.data);
      } catch (error) {
        console.log("Failed to fetch data: ", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return <div></div>;
}
