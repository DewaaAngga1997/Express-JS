import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const naviget = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
      });
      naviget("/");
    } catch (error) {
      console.log(error);
    }
  };

  //code untuk mengambil singgle data
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };

  return (
    <div className="max-w-lg mx-auto my-20 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-2xl font-bold text-center">Add User</h1>
      <form className="my-10" onSubmit={updateUser}>
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Name</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Input Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="font-bold text-slate-700">Email</label>
            <input
              type="email"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Input Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700 mb-4">Gender</label>
            <div
              className="flex gap-3"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <div class="flex items-center">
                <input
                  type="radio"
                  id="Male"
                  name="Gender"
                  className="mr-2"
                  value={"Male"}
                />
                <label for="Male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Female"
                  name="Gender"
                  className="mr-2"
                  value={"Female"}
                />
                <label for="Female">Female</label>
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-center mt-10">
            <button
              type="submit"
              className="w-28 py-3 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-lg border-blue-500 hover:shadow"
            >
              Simpan
            </button>
            <button
              onClick={() => naviget("/")}
              className="w-28 py-3 font-bold text-white bg-red-500 hover:bg-red-700 rounded-lg border-red-500 hover:shadow"
            >
              Batal
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
