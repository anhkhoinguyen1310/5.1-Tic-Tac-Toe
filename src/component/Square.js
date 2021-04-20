const Square = (props) => {
    return <button className="square" onClick = {() => props.onSquareClick(props.value)}>{props.hi}</button>;
  };

  export default Square;