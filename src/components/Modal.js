import React from "react";

const Modal = ({ msg, resetHandler }) => {
  return (
    <div className="flex justify-center items-center z-50 relative m-4">
      <div
        className="w-[30rem] h-20  bg-white rounded-lg px-4 py-4 flex 
        justify-evenly items-center flex-col"
      >
        <button
          className="self-end text-lg bg-blue-600 rounded w-10 h-10 text-white"
          onClick={resetHandler}
        >
          x
        </button>
        <h2 className="text-blue-800 font-semibold text-3xl md:text-4xl">
          Congratulations!
        </h2>
        <h3 className="text-blue-800 font-semibold text-2xl">{msg}</h3>
      </div>
    </div>
  );
};

export default Modal;
