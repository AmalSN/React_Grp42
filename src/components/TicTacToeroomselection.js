import React from 'react'

export default function TicTacToeroomselection() {
  return (
    
      <form action="/games/tic-tac-toe-room" method="GET">
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
