import React from 'react'
import './TicTacToe.css'
import $ from 'jquery'

export default function TicTacToe() {
  
  let blockNumbering = {
    "block-top-left": 0,
    "block-top-middle": 1,
    "block-top-right": 2,
    "block-centre-left": 3,
    "block-centre-middle": 4,
    "block-centre-right": 5,
    "block-bottom-left": 6,
    "block-bottom-middle": 7,
    "block-bottom-right": 8
};

console.log("Working");
let blockSymbol = ["","","","","","","","",""];
let currentSymbol = "X";

let drawSymbol = (pos) => {
  if(!($("#"+pos).hasClass("ticoccupied"))){
      $("#"+pos).text(currentSymbol);
      blockSymbol[blockNumbering[$("#"+pos).attr("id")]] = currentSymbol;
      console.log(blockSymbol);
      $("#"+pos).addClass("ticoccupied");
      if(checkWin()){
          $(".winner-text").text("Player " + currentSymbol + " Wins!!");
          on();
          console.log(currentSymbol + " Won");
          // socket.emit("winT", {x: currentSymbol, y: $("#loggedUser").text().slice(25,-21)});
      }
      else if(boardDraw(blockSymbol)){
          drawTheGame();
          // socket.emit("drawT");
      }
      else{
          if(currentSymbol === "X")currentSymbol="O";
          else currentSymbol="X";
          // socket.emit("moveT", {x: blockSymbol, y: currentSymbol});
      }
  }    
};
let rowCheck = function(i) {
  let check = blockSymbol[i] !== "" && (blockSymbol[i] === blockSymbol[i + 1] && blockSymbol[i] === blockSymbol[i + 2]);
  return check;
}

let columnCheck = function(i) {
  let check = blockSymbol[i] !== "" && (blockSymbol[i] === blockSymbol[i + 3] && blockSymbol[i] === blockSymbol[i + 6]);
  return check;
}

let diagCheck = function() {
  let check = blockSymbol[0] !== "" && (blockSymbol[0] === blockSymbol[4] && blockSymbol[0] === blockSymbol[8]);
  check = check || (blockSymbol[2] !== "" && (blockSymbol[2] === blockSymbol[4] && blockSymbol[2] === blockSymbol[6]));
  return check;
}

function checkWin() {
  return rowCheck(0)  || rowCheck(3) || rowCheck(6) || columnCheck(0) || columnCheck(1) || columnCheck(2) || diagCheck();
}

function boardDraw(playedSymbol){
  for(let i = 0; i < playedSymbol.length; i++){
      if(playedSymbol[i] === ""){
          return false;
      }
  }
  return true;
}

function drawTheGame() {
  $(".winner-text").text("Draw!!");
  on();
  console.log("Draw");
}

function off() {
  $(".overlay").css("display","none");
  resetBoard();
}

function on(){
  $(".overlay").css("display","flex");
}

function resetBoard() {
  currentSymbol = "X";
  blockSymbol = ["","","","","","","","",""];
  $(".block").removeClass("ticoccupied");
  $(".block").text("");
  // socket.emit("reloadT");
}

  
  return (
    <div>
      <div className="" id="freezeScreen"></div>
    <div className="overlay" onClick={() => off()}>
        <div className="display-winner"><span className="winner-text"></span></div>
        <div className="restart-message"><span className="restart-text">Click anywhere on the screen to play again</span></div>
    </div>
    
    {/* <%- include('partial/navbar', {active: ""}); %> */}

    <div className="container-tic">
        <h1 className="heading">Tic-Tac-Toe</h1>
        <div className="board">
            <div id="block-top-left" className="block top-row left-column" onClick={() => drawSymbol("block-top-left")}></div>
            <div id="block-top-middle" className="block top-row" onClick={() => drawSymbol("block-top-middle")}></div>
            <div id="block-top-right" className="block top-row right-column" onClick={() => drawSymbol("block-top-right")}></div>
            <div id="block-centre-left" className="block left-column" onClick={() => drawSymbol("block-centre-left")}></div>
            <div id="block-centre-middle" className="block" onClick={() => drawSymbol("block-centre-middle")}></div>
            <div id="block-centre-right" className="block right-column" onClick={() => drawSymbol("block-centre-right")}></div>
            <div id="block-bottom-left" className="block bottom-row left-column" onClick={() => drawSymbol("block-bottom-left")}></div>
            <div id="block-bottom-middle" className="block bottom-row" onClick={() => drawSymbol("block-bottom-middle")}></div>
            <div id="block-bottom-right" className="block bottom-row right-column" onClick={() => drawSymbol("block-bottom-right")}></div>
        </div>
        <span className="winner"/>
        <button className="btn1" onClick={() => resetBoard()}>Reset Board</button>
    </div>
    </div>
  )
}
