import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Cell({color, onClick}) {
  return (
    <div className={`col ${color}`} onClick={onClick} />
  )
}

function Board() {
  let field = useSelector(state => state.field)
  const dispatch = useDispatch()
  document.body.className = field[0][0];
  
  return(
    <div className="board">
      {field = field.map((row, index) => (
        <div key={index} className="row">
          {row.map((color, index) => (
            <Cell key={index} color={color}
              onClick={() => dispatch({type: "flood", color}) } />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board;