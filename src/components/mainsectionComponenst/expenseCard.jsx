import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function ExpenseCard() {
  return (
    <div className="border-2 w-full h-fit px-2 py-2.5 rounded-lg">
      <div className="font-bold text-red-500 text-xl">394.39</div>
      <div className="flex items-center justify-between py-2">
        <div className="flex flex-col gap-2.5">
          <div className="text-lg font-semibold">About the Expenses</div>
          <div className="text-[14px] text-neutral-600 font-semibold">29/20/3203</div>
        </div>
        <div className="flex flex-col gap-2.5">
            <button className="border-2 p-1 rounded-lg cursor-pointer text-red-600"><MdDelete size={24}/></button>
            <button className="border-2 p-1 rounded-lg cursor-pointer text-green-600"><FaEdit size={24}/></button>
        </div>
      </div>
    </div>
  );
}
