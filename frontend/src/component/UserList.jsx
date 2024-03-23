import React, { useState, useEffect } from "react";
import axios from "axios";

//cara menggunakan axios API GET data =============
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };
  //===================================================
  return (
    <div className="mt-10 flex flex-col ">
      <div className="w-full">
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-1 text-center">Name</th>
                <th className="py-3 px-1 text-center">Email</th>
                <th className="py-3 px-1 text-center">Gender</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-1 text-center">{user.name}</td>
                  <td className="py-3 px-1 text-center">{user.email}</td>
                  <td className="py-3 px-1 text-center">{user.gender}</td>
                  <td className="py-3 px-1 text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
