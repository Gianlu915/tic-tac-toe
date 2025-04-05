import React from 'react'
import { useState } from 'react'

const Player = ({initialName, symbol, isActive}) => {
const [playerName, setPlayerName] = useState(initialName);
const [isEditing, setIsEditing] = useState(false);

const handleName = () => {
setIsEditing(prevState => !prevState);
}

function handleChange(e){
setPlayerName(e.target.value);
}

  return (
    <li className={isActive ? 'active' : ""}>
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