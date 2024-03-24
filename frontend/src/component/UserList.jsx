import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//cara menggunakan axios API GET data =============
const UserList = () => {
  const [users, setUsers] = useState([]);

  //UseEffect untuk menjalankan fungsi getUsers
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };
  //===================================================

  //delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  //end delete user
  return (
    <div className="mt-20 flex flex-col container ">
      <div className="w-full">
        <div className="flex justify-end mr-48">
          <Link
            to="/add"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
          >
            Tambah
          </Link>
        </div>
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
                    <Link
                      to={`/edit/${user.id}`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
                    >
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
