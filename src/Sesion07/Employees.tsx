import {
  Button,
  Divider,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Modal,
  Select,
  Space,
  Table,
  Popconfirm,
  message,
} from "antd";
import React from "react";
import numeral from "numeral";
import axiosClient from "../Sesion06/configs/axiosClient";
import { QuestionCircleOutlined } from "@ant-design/icons";

type Props = {};

export default function Employees({}: Props) {
  const [form] = Form.useForm();
  const [formUpdate] = Form.useForm();
  const [formTable] = Form.useForm();

  const [selectedId, setSelectedId] = React.useState(-1);

  const [open, setOpen] = React.useState(false);

  const [Employees, setEmployees] = React.useState([]);

  const [refresh, setRefresh] = React.useState(false);

  // GET /online-shop/employees
  React.useEffect(() => {
    const getEmployees = async () => {
      const response = await axiosClient.get("/online-shop/employees");
      setEmployees(response.data);
    };

    getEmployees();
  }, [refresh]);

  const columns: any = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "right",
      className: "text-red-500",
    },
    {
      title: "Họ",
      dataIndex: "firstName",
      key: "firstName",
    },

    {
      title: "Tên",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Tên",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Ngày Sinh",
      dataIndex: "birthday",
      key: "birthday",
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
              title="Delete the Employees"
              description="Are you sure to delete this Employees?"
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
    console.log(values);

    try {
      const response = await axiosClient.post(
        "/online-shop/employees",
        values,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      console.log(response);
      message.success("Thêm mới thành công", 2);
      setRefresh(!refresh);
      form.resetFields([
        "firstName",
        "lastName",
        "email",
        "address",
        "phoneNumber",
        "birthday",
      ]);
    } catch (err: any) {
      console.error(err);
    }
  };

  const onFinishUpdate = async (values: any) => {
    try {
      const response = await axiosClient.patch(
        "/online-shop/employees/" + selectedId,
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
      console.error(err);
    }
  };

  const onDelete = async (id: number) => {
    try {
      const response = await axiosClient.delete(
        "/online-shop/employees/" + id,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
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
      >
        <Form.Item
          label="Họ"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Họ bắt buộc phải Nhập",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tên "
          name="lastName"
          rules={[
            {
              required: true,
              message: "Tên bắt buộc phải Nhập",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email "
          name="email"
          rules={[
            {
              required: true,
              message: "Email bắt buộc phải Nhập",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Địa Chỉ "
          name="address"
          rules={[
            {
              required: true,
              message: "Địa chỉ bắt buộc phải Nhập",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số Điện Thoại "
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Số Điện Thoại bắt buộc phải Nhập",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ngày Sinh "
          name="birthday"
          rules={[
            {
              required: true,
              message: "Ngày Sinh bắt buộc phải Nhập",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
          <Button type="primary" htmlType="submit">
            Create new Employees
          </Button>
        </Form.Item>
      </Form>
      <Table rowKey="id" dataSource={Employees} columns={columns} />

      <Modal
        title="Cập nhật thông tin sản phẩm"
        okText="Cập nhật"
        cancelText="Đóng"
        open={open}
        onOk={() => {}}
        onCancel={() => {
          setOpen(false);
        }}
        footer={
          <div>
            <Divider />
            <Space>
              <Button
                type="default"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Đóng
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  formUpdate.submit();
                }}
              >
                Cập nhật
              </Button>
            </Space>
          </div>
        }
      >
        <Divider />
        <Form
          form={formUpdate}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinishUpdate}
        >
          <Form.Item
            label="Họ"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Họ bắt buộc phải Nhập",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tên "
            name="lastName"
            rules={[
              {
                required: true,
                message: "Tên bắt buộc phải Nhập",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email "
            name="email"
            rules={[
              {
                required: true,
                message: "Email bắt buộc phải Nhập",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Địa Chỉ "
            name="address"
            rules={[
              {
                required: true,
                message: "Địa chỉ bắt buộc phải Nhập",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số Điện Thoại "
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Số Điện Thoại bắt buộc phải Nhập",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Ngày Sinh "
            name="birthday"
            rules={[
              {
                required: true,
                message: "Ngày Sinh bắt buộc phải Nhập",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
