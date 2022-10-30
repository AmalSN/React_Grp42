import React from 'react'
import './LudoRoomSelection.css'
export default function LudoRoomSelection() {
  return (
    <div>
      <form action="/games/ludo-room" method="GET">
    

    <div className="col-sm-12 mx-auto" style={{width: "150px;"}}>
        <label htmlFor="room"><b><br/>Enter Room</b></label>
    <input type="text" id="room" name="room" required/>
</div>
<div className="mx-auto" style={{width: "100px"}}>
     <button type="submit">Enter</button>
     </div>
     </form>
</div>


    
  )
}
