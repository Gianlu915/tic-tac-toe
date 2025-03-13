import React from 'react'
import { useState } from 'react'

const Player = ({initialName, symbol}) => {
const [playerName, setPlayerName] = useState(initialName);
const [isEditing, setIsEditing] = useState(false);

const handleName = () => {
setIsEditing(prevState => !prevState);
}

function handleChange(e){
setPlayerName(e.target.value);
}

  return (
    <li>
     {isEditing ? 
     <span className='player'>
        <input type="text" value={playerName} onChange={handleChange}/>
    </span> : (
         <span className="player-name">{playerName}</span>
         
    )
     }   
    
    <span className="player-symbol">{symbol}</span>
    <button onClick={handleName}>{isEditing ? "Save" : "Edit"}</button>
        </li>
  )
}

export default Player