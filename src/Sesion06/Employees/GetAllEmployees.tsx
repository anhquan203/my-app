import React from "react";
import axiosClient from "../configs/axiosClient";

export default function GetAllEmployees() {
  // Loading state
  const [loading, setLoading] = React.useState(false);
  const [Employees, setEmployees] = React.useState([]);

  // Chạy 1 lần duy nhất khi component được render lần đầu tiên
  React.useEffect(() => {
    // Async / Await

    const getData = async () => {
      try {
        setLoading(true);
        const response: any = await axiosClient.get("/online-shop/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log("Failed to fetch data: ", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {loading && <div>Loading ...</div>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>PhoneNumber</th>
            <th>Address</th>
            <th>Birthday</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {Employees.map((employees: any, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>{employees.firstName}</td>
                <td>{employees.lastName}</td>
                <td>{employees.phoneNumber}</td>
                <td>{employees.address}</td>
                <td>{employees.birthday}</td>
                <td>{employees.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
