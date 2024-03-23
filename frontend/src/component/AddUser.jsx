import React from "react";

const AddUser = () => {
  return (
    <div className="mt-10 items-center">
      <h1 className="text-2xl font-bold py-5">Edit Data User</h1>
      <label className="text-slate-700 text-sm font-bold mb-2">Name</label>
      <input
        type="text"
        className="text-sm border rounded w-full py-2 px-3 text-slate-700 mb-3"
        placeholder="Input Name ..."
      ></input>
      <label className="text-slate-700 text-sm font-bold mb-2">Email</label>
      <input
        type="email"
        className="text-sm border rounded w-full py-2 px-3 text-slate-700 mb-3"
        placeholder="Input Email ..."
      ></input>
      <label className="text-slate-700 text-sm font-bold mb-2">Genre</label>
    </div>
  );
};

export default AddUser;
