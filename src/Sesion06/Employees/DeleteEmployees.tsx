import React from "react";
import axiosClient from "../configs/axiosClient";

export default function DeleteEmployees() {
  // Refresh state
  const [refresh, setRefresh] = React.useState(false);

  // Loading state
  const [loading, setLoading] = React.useState(false);

  const [employees, setEmployees] = React.useState([]);
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
  }, [refresh]);

  const handleDelete = async (id: string) => {
    try {
      const response: any = await axiosClient.delete(
        `/online-shop/employees/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      console.log(response);

      // Refresh state
      setRefresh(!refresh);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  };

  return (
    <div>
      {loading && <div>Loading ...</div>}

      <table className="table table-striped">
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
          {employees.map((employees: any, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{employees.id}</td>
                <td>{employees.firstName}</td>
                <td>{employees.lastName}</td>
                <td>{employees.email}</td>
                <td>{employees.address}</td>
                <td>{employees.phoneNumber}</td>
                <td>{employees.birthday}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => {
                      return (
                        window.confirm("Are you sure?") &&
                        handleDelete(employees.id)
                      );
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
