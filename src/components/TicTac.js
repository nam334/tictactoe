import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TicTac = ({
  index,
  boardSize,
  board,
  setBoardSize,
  size,
  playerTurn,
  msg,
  setMsg,
  strikeClass,
  setPlayerTurn,
  PLAYER_X,
  PLAYER_Y,
  setCountX,
  setCountY,
  setCountD,
}) => {
  const clickHandler = (board) => {
    if (board.value !== "-") return;
    const arr = boardSize?.map((b, index) => {
      if (index === board.id - 1) {
        if (playerTurn === PLAYER_X) setPlayerTurn(PLAYER_Y);
        else setPlayerTurn(PLAYER_X);
        return { ...b, value: playerTurn };
      }
      return b;
    });
    setBoardSize(arr);
  };
  const ref = useRef();

  // useEffect(() => {
  //   console.log(playerTurn);
  // }, [playerTurn]);
  // useEffect(() => {
  //   setCountY(0);
  // }, []);
  const winningCombinations = [
    //rows
    { combo: [0, 1, 2] },
    { combo: [3, 4, 5] },
    { combo: [6, 7, 8] },

    //columns
    { combo: [0, 3, 6] },
    { combo: [1, 4, 7] },
    { combo: [2, 5, 8] },

    //diagonal
    { combo: [0, 4, 8] },
    { combo: [2, 4, 6] },
  ];

  const checkWinner = () => {
    for (const { combo } of winningCombinations) {
      const val1 = boardSize[combo[0]]?.value;
      const val2 = boardSize[combo[1]]?.value;
      const val3 = boardSize[combo[2]]?.value;

      if (val1 !== "-" && val2 !== "-" && val3 !== "-") {
        if (val1 === val2 && val2 === val3 && val3 === val1) {
          setMsg(`Game over. Player ${val1} wins`);
        }
      }
    }
  };

  checkWinner();

  return (
    <>
      {/* <ToastContainer /> */}
      <div
        className={`m-1 rounded-md cursor-pointer hover:bg-[#491e5d] bg-[#43115B]
             w-10 h-10 px-8 py-6 relative inline ${strikeClass}`}
        onClick={(e) => clickHandler(board)}
      >
        <span
          className={`font-bold text-2xl ${
            board?.value === "X"
              ? `text-[#48D2FE]`
              : board?.value === "O"
              ? `text-[#E2BE00]`
              : board.value === "-"
              ? `text-purple-400`
              : null
          }`}
          ref={ref}
          id="ref"
        >
          {board?.value}
        </span>
      </div>
    </>
  );
};

export default TicTac;
