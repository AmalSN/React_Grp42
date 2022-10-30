import React from 'react'
import './SnakeandLadderroomselection.css'

export default function SnakeandLadderroomselection() {
  return (
 
      <form action="/games/snake-ladder-room" method="GET">
        <div className="col-sm-12 mx-auto" style={{width: "150px;"}}>
            <label htmlFor="room"><b><br/>Enter Room</b></label>
        <input type="text" id="room" name="room" required/>
    </div>
    <div className="mx-auto" style={{width: "100px;"}}>
         <button type="submit">Enter</button>
         </div>
    </form>
   
  )
}
