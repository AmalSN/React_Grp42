import React from 'react'
import snk from './SnakeandLadder.module.css'
import SnakeBlock from './SnakeBlock.js'
import { useState } from 'react'
import Dice from './Dice.js'

export default function SnakeandLadder() {

    
    let turnOrder = 0;
    let snakeList = [
      [17, 6],
      [34, 24],
      [54, 37],
      [62, 19],
      [70, 65],
      [87, 29],
      [94, 90],
      [99, 38]
    ]
    let ladderList = [
      [2, 38],
      [4, 14],
      [27, 50],
      [30, 71],
      [55, 95],
      [64, 84]
    ]
    let currentColor = "red";
    let colorNumbering = {
      "red": 0,
      "blue": 1,
      "yellow": 2,
      "green": 3
    };
    let playerPosition = [1, 1, 1, 1];

    function rollDice() {

        let elDiceOne = document.getElementsByClassName('dce1');
        let diceOne   = Math.floor((Math.random() * 6) + 1);
       
        console.log(diceOne);
      
        // for (let i = 1; i <= 6; i++) {
        //   elDiceOne.classList.remove(`${snk.show}`);
        //   if (diceOne === i) {
        //     elDiceOne.classList.add('show-' + i);
        //   }
        // }
      
        // pieceMovement(currentColor, diceOne);
      }

    let generateBoard = () => {
        let blocksInBoard = []
        let cnt = 101;
        for(let y = 0; y < 5; y++){
            for(let x = 0; x < 10; x++){
              cnt--;
              blocksInBoard.push(<SnakeBlock cnt={cnt}/>)
            }
            cnt -= 10;
            for(let x = 0; x < 10; x++){
                blocksInBoard.push(<SnakeBlock cnt={cnt}/>)
                cnt++;
            }
            cnt -= 10
        }
        return blocksInBoard;
    }





  return (
      <div style={{backgroundColor: "burlywood"}}>

{/* <div className="" id="freezeScreen"></div>
<div className="overlay" onClick="off()">
    <div className="display-winner"><span className="winner-text"></span></div>
    <div className="restart-message"><span className="restart-text">Click anywhere on the screen to play again</span>
    </div>
</div> */}
{/* <%- include('partial/navbar', {active: ""}); %> */}

<div className={`${snk.allclasses} main-container container-fluid py-4`}>
    <div className="row">
        <div className={`${snk.boardcontainer} col-6`}>
            <div className={`${snk.board} ${snk.relativecontainer}`}>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake1}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake2}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake3}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake4}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake5}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake6}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake7}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake8}/>
                <img alt="" src="/ladder.png" className={snk.ladderPic} id={snk.ladder1}/>
                <img alt="" src="/ladder.png" className={snk.ladderPic} id={snk.ladder2}/>
                <img alt="" src="/ladder.png" className={snk.ladderPic} id={snk.ladder3}/>
                <img alt="" src="/ladder.png" className={snk.ladderPic} id={snk.ladder4}/>
                <img alt="" src="/ladder.png" className={snk.ladderPic} id={snk.ladder5}/>
                <img alt="" src="/ladder.png" className={snk.ladderPic} id={snk.ladder6}/>
                
                
                {generateBoard()}

                
            </div>
        </div>
        <div className={`${snk.dicecontainer} col-6`}>
            <div className="container">
                <div className="row">
                    <Dice num={1}/>
                </div>
                <div className="row">
                    <div id='roll' className="roll-button"><button className={`${snk.btn} d-block mx-auto`} onClick={rollDice}>Roll dice!</button></div>
                </div>
                <div className="row my-4">
                    <div className="col-4 my-auto">
                        <p id={snk.turnindicator} className={`text-center ${snk.redpiececolor}`}>Red Player's Turn</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
</div>
    
  )
}
