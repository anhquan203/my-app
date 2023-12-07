import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Popconfirm,
  message,
  Drawer,
  Checkbox,
  Radio,
  TreeSelect,
  InputNumber,
  Switch,
  Slider,
  ColorPicker,
  Cascader,
  DatePicker,
} from "antd";
import React from "react";
import numeral from "numeral";
import axiosClient from "../Sesion06/configs/axiosClient";
import { QuestionCircleOutlined } from "@ant-design/icons";

type Props = {};

export default function Products({}: Props) {
  const [form] = Form.useForm();
  const [formUpdate] = Form.useForm();

  const [selectedId, setSelectedId] = React.useState(-1);
  const [value, setValue] = React.useState(1);

  const [open, setOpen] = React.useState(false);

  const [orders, setOrders] = React.useState([]);

  const [customers, setCustomers] = React.useState([]);

  const [employees, setEmployees] = React.useState([]);

  const [refresh, setRefresh] = React.useState(false);
  // GET /online-shop/orders
  React.useEffect(() => {
    const getOrders = async () => {
      const response = await axiosClient.get("/online-shop/orders");
      setOrders(response.data);

      // console.log('response.data', response.data);
    };

    getOrders();
  }, [refresh]);

  // GET /online-shop/customers
  React.useEffect(() => {
    const getCustomers = async () => {
      const response = await axiosClient.get("/online-shop/customers");
      setCustomers(response.data);
    };

    getCustomers();
  }, []);

  // GET /online-shop/employees
  React.useEffect(() => {
    const getEmployees = async () => {
      const response = await axiosClient.get("/online-shop/employees");
      setEmployees(response.data);
    };

    getEmployees();
  }, []);

  const columns: any = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "right",
      className: "text-red-500",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Date",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Total",
      dataIndex: "paymentType",
      key: "paymentType",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Customer",
      dataIndex: ["customer", "lastName"],
      key: "customer",
    },
    {
      title: "Employee",
      dataIndex: ["employee", "lastName"],
      key: "employee",
    },

    {
      title: "Thao tác",
      dataIndex: "actions",
      key: "actions",
      width: "1%",
      render: (text: any, record: any, index: number) => {
        return (
          <Space>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                setSelectedId(record.id);
                formUpdate.setFieldsValue(record);
              }}
            >
              Sửa
            </Button>

            <Popconfirm
              title="Delete the product"
              description="Are you sure to delete this product?"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={() => {
                onDelete(record.id);
              }}
            >
              <Button type="primary" danger>
                Xóa
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const onFinish = async (values: any) => {
    // console.log(values);
    let data = values;
    data["orderDetails"] = [];
    console.log(data);

    try {
      const response = await axiosClient.post("/online-shop/orders", values, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      console.log(response);
      message.success("Thêm mới thành công", 2);
      setRefresh(!refresh);
      form.resetFields(["customerId", "employeeId", "description"]);
    } catch (err: any) {
      console.error(err);
    }
  };

  const onFinishUpdate = async (values: any) => {
    try {
      let data = values;
      data["orderDetails"] = [];
      console.log(data);
      const response = await axiosClient.patch(
        "/online-shop/orders/" + selectedId,
        values,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      console.log(response);

      setRefresh(!refresh);
      message.success("Cập nhật thành công", 2);
      formUpdate.resetFields();
      setOpen(false);
    } catch (err: any) {
      console.error("error:", err);
    }
  };

  const onDelete = async (id: number) => {
    try {
      const response = await axiosClient.delete("/online-shop/orders/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      console.log(response);
      setRefresh(!refresh);
      message.success("Xóa thành công", 2);
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
        initialValues={{
          createdDate: "2023-12-05T10:25:36.588Z",
          shippedDate: "2023-12-05T11:30:40.634Z",
          status: "WAITING",
          shippingAddress: "123 Street, London",
          shippingCity: "London",
          paymentType: "CASH",
          orderDetails: [
            {
              orderId: 1,
              productId: 1,
              quantity: 1,
              price: 0,
              discount: 0,
            },
          ],
        }}
      >
        {/* Customers */}
        <Form.Item
          label="Customers"
          name="customerId"
          rules={[
            {
              required: true,
              message: " Khách Hàng bắt buộc phải chọn",
            },
          ]}
        >
          <Select
            options={customers.map((item: any) => {
              return {
                value: item.id,
                label: item.lastName,
              };
            })}
          />
        </Form.Item>
        {/* Employees */}
        <Form.Item
          label="Employees"
          name="employeeId"
          rules={[
            {
              required: true,
              message: "Nhân viên bắt buộc phải chọn",
            },
          ]}
        >
          <Select
            options={employees.map((item: any) => {
              return {
                value: item.id,
                label: item.lastName,
              };
            })}
          />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
          <Button type="primary" htmlType="submit">
            Create new product
          </Button>
        </Form.Item>
      </Form>
      <Table rowKey="id" dataSource={orders} columns={columns} />

      <Drawer
        title={`chi tiết đơn hàng`}
        placement="right"
        size={"large"}
        onClose={() => setOpen(false)}
        open={open}
      >
        <Form
          form={formUpdate}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinishUpdate}
        >
          <Form.Item label="CreateDate" name="createdDate">
            <Input />
          </Form.Item>
          <Form.Item label="ShippedDate" name="shippedDate">
            <Input />
          </Form.Item>
          <Form.Item label="Status" name="status">
            <Select
              options={[
                { value: "waiting", label: "Waiting" },
                { value: "Canceled", label: "Canceled" },
                { value: "completed", label: "Completed" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>
          <Form.Item label="ShippingAddress" name="shippingAddress">
            <Input />
          </Form.Item>
          <Form.Item label="ShippingCity" name="shippingCity">
            <Input />
          </Form.Item>
          <Form.Item label="PaymentType" name="paymentType">
            <Select
              options={[
                { value: "cash", label: "Cash" },
                { value: "card", label: "Card" },
              ]}
            />
          </Form.Item>
          <Divider />
          <Form.Item
            label="Customers"
            name="customerId"
            rules={[
              {
                required: true,
                message: " Khách Hàng bắt buộc phải chọn",
              },
            ]}
          >
            <Select
              options={customers.map((item: any) => {
                return {
                  value: item.id,
                  label: item.lastName,
                };
              })}
            />
          </Form.Item>
          {/* Employees */}
          <Form.Item
            label="Employees"
            name="employeeId"
            rules={[
              {
                required: true,
                message: "Nhân viên bắt buộc phải chọn",
              },
            ]}
          >
            <Select
              options={employees.map((item: any) => {
                return {
                  value: item.id,
                  label: item.lastName,
                };
              })}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
