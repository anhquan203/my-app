import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import axiosClient from "../configs/axiosClient";
import { render } from "@testing-library/react";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export default function UpdateOrder() {
  const [refresh, setrefresh] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response: any = await axiosClient.get("/online-shop/orders");
        setOrders(response.data);
        console.log(orders);
      } catch (error) {
        console.log("Failed to fetch data: ", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [refresh]);
  const handleDelete = async (id: string) => {
    try {
      const response: any = await axiosClient.delete(
        `/online-shop/orders/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      console.log(response);

      // Refresh state
      setrefresh(!refresh);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ngay tao",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Ngay giao hang",
      dataIndex: "shippedDate",
      key: "shippedDate",
    },

    {
      title: "Trang thai",
      dataIndex: "status",
      key: "status",
    },

    {
      title: "Dia chi giao hang",
      dataIndex: "shippingCity",
      key: "shippingCity",
    },
    {
      title: "Thanh toan",
      dataIndex: "paymentType",
      key: "paymentType",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button>chi tiết</Button>
          <Button type="primary">Sửa</Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              return (
                window.confirm("Are you sure?") && handleDelete(record.name)
              );
            }}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={orders} />
    </div>
  );
}
