import React, { useEffect, useRef, useState } from "react";
import TicTac from "./TicTac";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Tictactoe = ({
  setBgcolor,
  size,
  setBoardSize,
  setPlayerTurn,
  setSize,
  setMsg,
  msg,
  boardSize,
  PLAYER_X,
  PLAYER_Y,
  playerTurn,
  setCountX,
  setCountY,
  setCountD,
}) => {
  const [strikeClass, setStrikeClass] = useState(null);
  const [showModal, setshowModal] = useState(false);
  useEffect(() => {
    setCountX(0);
    setCountY(0);
    if (boardSize?.length) {
      boardSize?.map((board) => {
        if (board.value !== "-") {
          if (board?.value === "X") setCountX((prev) => prev + 1);
          else setCountY((prev) => prev + 1);
        }
        return null;
      });
    }
  }, [boardSize]);

  useEffect(() => {
    if (size) {
      // setBoardSize((Array(size?.length * size?.length).fill("b")))
      let i = 1,
        arr = [];
      while (i <= size?.length * size?.length) {
        let obj = {};
        obj.value = "-";
        obj.id = i;
        arr.push(obj);
        i++;
      }
      setBoardSize(arr);
    }
  }, [size]);

  const resetHandler = () => {
    setBoardSize(null);
    setCountD(0);
    setSize(Array(3).fill("b"));
    setMsg("");
    setPlayerTurn(PLAYER_X);
    setshowModal(false);
  };

  useEffect(() => {
    if (msg === "") {
      setshowModal(false);
      //  setBgcolor(null);
    } else {
      setshowModal(true);
      //setBgcolor(["#b4b6b7"]);
      let timer = setTimeout(() => {
        resetHandler();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [msg]);

  useEffect(() => {
    if (showModal)
      toast(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }, [showModal]);
  return (
    <>
      {showModal ? (
        <ToastContainer
          toastStyle={{
            backgroundColor: ["#007f00"],
            border: "none",
            color: "white",
          }}
          position="center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      ) : null}
      {/* <ToastContainer /> */}
      {boardSize?.map((board, index) => (
        <>
          <TicTac
            boardSize={boardSize}
            board={board}
            setBoardSize={setBoardSize}
            size={size}
            msg={msg}
            setMsg={setMsg}
            strikeClass={strikeClass}
            playerTurn={playerTurn}
            setPlayerTurn={setPlayerTurn}
            PLAYER_X={PLAYER_X}
            PLAYER_Y={PLAYER_Y}
            setCountX={setCountX}
            setCountY={setCountY}
            setCountD={setCountD}
          />
          {index === size?.length - 1 ? (
            <>
              <br />
              <br />
              <br />
            </>
          ) : null}
          {index === 2 * size?.length - 1 ? (
            <>
              <br />
              <br />
              <br />
            </>
          ) : null}
        </>
      ))}

      <div className="mt-10">
        <button
          onClick={resetHandler}
          className="bg-[#C5A0D7] text-black font-bold rounded-md px-4 py-2 hover:bg-slate-50"
        >
          New Game
        </button>
      </div>
    </>
  );
};

export default Tictactoe;
