import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MateHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="w-full pb-8">
      <h1 className="mb-4 text-3xl font-semibold">My Mate</h1>
      <ul className="flex justify-between w-full gap-4">
        <li
          className={`w-full text-[0.7rem] flex gap-4 items-center justify-center border cursor-pointer rounded-lg py-2 ${
            location.pathname === "/mate/find"
              ? "font-bold bg-black text-white"
              : ""
          }`}
          onClick={() => navigate("/mate/find")}
        >
          <span>Find New Mate</span>
        </li>
        <li
          className={`w-full text-[0.7rem] flex gap-4 items-center justify-center border cursor-pointer rounded-lg py-2 ${
            location.pathname === "/mate/list"
              ? "font-bold bg-black text-white"
              : ""
          }`}
          onClick={() => navigate("/mate/list")}
        >
          <span>Mate List</span>
        </li>
        <li
          className={`w-full text-[0.7rem] flex gap-4 items-center justify-center border cursor-pointer rounded-lg py-2 ${
            location.pathname === "/mate/request"
              ? "font-bold bg-black text-white"
              : ""
          }`}
          onClick={() => navigate("/mate/request")}
        >
          <span>My Requests</span>
        </li>
      </ul>
    </div>
  );
};

export default MateHeader;
