import axios from "axios";
import { Button, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import AddMem from "../Components/AddMem";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handlefetch = async () => {
      try {
        const response = await axios.get(
          "https://assessment-api-biay.onrender.com/users"
        );
        setData(response.data.data[0]);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    handlefetch();
  }, []);

  const handleDelete = async (_id) => {
    console.log("clicked delete");
    try {
      const res = await axios.delete(
        `https://assessment-api-biay.onrender.com/users/${_id}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mx-auto mt-6 relative">
        <div className="flex  items-center gap-6 justify-end">
          <div className="">
            <FaBell />
          </div>
          <div className="flex items-center gap-3">
            <img src="" alt="Prof" />
            Samir S.
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl">Team</div>
          <div className="flex items-center gap-4">
            <div>
              <Link to="/addmem">
                <Button color="blue">Add Member</Button>
              </Link>
            </div>
            <div className="">
              <TextInput type="text" placeholder="Search member" />
            </div>
          </div>
        </div>
        <div>
          <table className=" border capitalize" cellPadding="10px" width="100%">
            <thead className="border">
              <tr>
                <th colSpan="">name</th>
                <th>department</th>
                <th>role</th>
                <th>edit</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>{data.username}</td>
                <td>{data.department}</td>
                <td>{data.role}</td>
                <td className="flex gap-4">
                  {/* <div onClick={handleEdit}> */}
                  <CiEdit />
                  {/* </div> */}
                  <button
                    className=""
                    onClick={() => {
                      handleDelete(data._id);
                    }}
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
