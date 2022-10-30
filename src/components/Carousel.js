import React from 'react'
import mainstyle from './MainPage.module.css'

const Carousel = ({game}) => {

    let gameimage;

    if(game==="tic"){
        gameimage="./TicTacToe_pic.jpg";
    }
    if(game==="snake"){
        gameimage="./SnakeLadder_pic.jpg";
    }
    if(game==="ludo"){
        gameimage="./Ludo_pic.jpg";
    }

  return (
    <div className={`carousel-item ${game==="tic"?"active":""}`}>
        <img src={gameimage} className={`d-block w-100 ${mainstyle.imgChange}`} alt=""/>
        <div className="carousel-caption d-none d-md-block text-dark bg-light box-transparent">
            <h5>Tic-Tac-Toe</h5>
            <p className="d-none d-lg-block">Show us if you can get 3 in a row</p>
        </div>
    </div>
  )
}

export default Carousel
