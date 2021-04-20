import "./App.css";
import Square from "./component/Square"
import NavBar from "./component/NavBar"
import { useState } from 'react';

const Board = (props) => {
  const [xIsNext, setXIsNext] = useState(true);
  const renderSquare = (i) => {
    return (<Square
      value={i}
      hi={props.squares[i]}
      onSquareClick={onSquareClick}
    />  
    );
  };
  const onSquareClick = (i) => {
    //if (props.square[i])
    //return true}
    const newSquare = props.squares;
    newSquare[i] = xIsNext ? 'X' : 'O';
    props.setSquares(newSquare);
    setXIsNext(!xIsNext);
    
  };
  const status = xIsNext ? "Next player: X" : "Next player: O" ;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log({ squares });
  return (
    <div className="game">

      <div className="game-info">
        
        <ol>{/* TODO */}</ol>
      </div>
      <br /> <br /> <br /> <br />
      <div className="game-board">
        <Board squares={squares} setSquares={setSquares} />
      </div>
    </div>
  );
};

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Game />
    </div>
  );
}


export default App;