import { useEffect, useState } from "react";
import "./App.css";
import Tictactoe from "./components/Tictactoe";
import img from "../src/img.svg";
function App() {
  const [bgcolor, setBgcolor] = useState(null);
  const [size, setSize] = useState(Array(3).fill("b"));
  const [msg, setMsg] = useState("");
  const [boardSize, setBoardSize] = useState(null);
  const PLAYER_X = "X";
  const PLAYER_Y = "O";
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [countX, setCountX] = useState(0);
  const [countY, setCountY] = useState(0);
  const [countD, setCountD] = useState("-");

  const modalResetHandler = () => {
    if (bgcolor !== null) {
      setBoardSize(null);
      setSize(Array(3).fill("b"));
      setMsg("");
      setPlayerTurn(PLAYER_X);
    }
  };

  useEffect(() => {
    let count = 0;
    if (boardSize?.length) {
      boardSize?.map((board) => {
        if (board.value !== "-") {
          count++;
        }
        return null;
      });
    }
    if (count === 9 && countX !== countY) setCountD("YES");
  }, [boardSize, countX, countY]);

  return (
    <>
      <div className="">
        <img
          src={img}
          alt="tic tac toe"
          className="hidden w-80 h-[20rem] md:block absolute bottom-0 left-0"
        />
      </div>
      <div className="bg-[#5A1E76] h-screen flex justify-center items-center">
        <div
          className="h-max bg-[#2B0040] w-max p-10 rounded-2xl"
          onClick={modalResetHandler}
        >
          <div className="flex justify-center items-center w-full gap-2 ">
            <div
              className="w-12 h-12 px-9 py-8 bg-[#48D2FE] rounded-md flex justify-center flex-col
             gap-2 items-center"
            >
              <p className="text-xs gap-2 font-bold flex">
                <span>PLAYER</span>
                <span>X</span>
              </p>
              <span className="text-lg font-bold">{countX}</span>
            </div>
            <div className="w-12 h-12 px-9 py-8 bg-[#48D2FE] rounded-md flex justify-center flex-col gap-2 items-center">
              <p className="text-xs gap-2 font-bold flex">
                <span>DRAW</span>
              </p>
              <span className="text-base font-bold">{countD}</span>
            </div>
            <div className="w-12 h-12 px-9 py-8 bg-[#E2BE00] rounded-md flex justify-center flex-col gap-2 items-center">
              <p className="text-xs gap-2 font-bold flex">
                <span>PLAYER</span>
                <span>O</span>
              </p>
              <span className="text-lg font-bold">{countY}</span>
            </div>
          </div>
          <div className={`App bg-[${bgcolor}] mt-10`}>
            <Tictactoe
              setBgcolor={setBgcolor}
              setBoardSize={setBoardSize}
              size={size}
              setPlayerTurn={setPlayerTurn}
              setSize={setSize}
              setMsg={setMsg}
              msg={msg}
              boardSize={boardSize}
              PLAYER_X={PLAYER_X}
              PLAYER_Y={PLAYER_Y}
              playerTurn={playerTurn}
              setCountX={setCountX}
              setCountD={setCountD}
              setCountY={setCountY}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
