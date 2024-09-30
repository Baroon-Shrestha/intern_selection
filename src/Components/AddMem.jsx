import axios from "axios";
import { TextInput } from "flowbite-react";
import React, { useState } from "react";

export default function AddMem() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://assessment-api-biay.onrender.com/users",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="m-6">
        <h1>Add a new User</h1>
        <form
          action=""
          className="bg-red0 flex flex-col mt-10"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username border-black">Username</label>
          <input
            type="text"
            id="username"
            placeholder="enter your username "
            required
            onChange={handleChange}
          />

          <label htmlFor="">email</label>
          <input
            type="text"
            id=""
            placeholder="enter your email"
            required
            onChange={handleChange}
          />

          <label htmlFor="photo">photo</label>
          <input
            type="file"
            id="photo"
            placeholder="add your photo"
            required
            onChange={handleChange}
          />

          <label htmlFor="role">role</label>
          <input
            type="text"
            id="role"
            placeholder="enter your role(Member & admin)"
            required
            onChange={handleChange}
          />

          <label htmlFor="deparment">department</label>
          <input
            type="text"
            id="department"
            placeholder="enter your department (IT & NOC, Research, SSD, Dev-Platfrom)"
            required
            onChange={handleChange}
          />
        </form>
        <button className="px-4 py-2 bg-gray-200" onSubmit={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
