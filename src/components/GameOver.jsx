import React from 'react'

const GameOver = ({winner, draw}) => {
  return (
    <div id='game-over'>
        <h2>Game Over!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>Its a draw!</p>}
        <p><button>Rematch!</button></p>
    </div>
  )
}

export default GameOver