import React from "react";
import { FaHome, FaSearch, FaFile, FaPeace } from "react-icons/fa";
import { MdPeople, MdImportExport } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="w-[17%] bg-[#FAFAFA] h-[100vh] pt-4 absolute">
        <div className="flex flex-col items-center gap-8">
          <div className="flex justify-around items-center">
            <div>
              <img
                src="../assets/Logo.svg"
                alt="Logo"
                height="48px"
                width="48px"
              />
            </div>
            <div>Calender</div>
          </div>

          <div className="text-[#737373] flex flex-col gap-4 ">
            <div className="flex items-center text-xl gap-4">
              <div>
                <FaHome />
              </div>
              <Link>
                <div>Home</div>
              </Link>
            </div>
            <div className="flex items-center text-lg gap-4">
              <div>
                <FaSearch />
              </div>
              <div>Search</div>
            </div>
            <div className="flex items-center text-xl gap-4">
              <div>
                <MdPeople />
              </div>
              <div>Members</div>
            </div>
            <div className="flex items-center text-xl gap-4">
              <div>
                <MdImportExport />
              </div>
              <div>Import/Export</div>
            </div>
            <div className="flex items-center text-xl gap-4">
              <div>
                <FaFile />
              </div>
              <div>Summary</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
