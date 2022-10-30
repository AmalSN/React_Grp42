import React from 'react'
import {Link} from  "react-router-dom";


const Navbar = ({active, setActive, curruser}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid offset-md-4">
        <Link className="navbar-brand text-warning" to="/">Board Nights</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className={active==="Home"?"nav-link active":"nav-link"} aria-current="page" to="/" onClick={() => {setActive(active = "Home")}}>Home</Link>
                    {/* <span className={active==="Home"?"nav-link active":"nav-link"} onClick={() => {setActive(active = "Home")}}>Home</span> */}
                </li>
                <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Games
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <Link className="dropdown-item" to="/games/tic-tac-toe" onClick={() => {setActive(active = "TicTacToeLeaderboard")}}>Tic-Tac-Toe</Link>
                            {/* <span className="dropdown-item" onClick={() => {setActive(active = "TicTacToeLeaderboard")}}>Tic-Tac-Toe</span> */}
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/games/snake-ladder" onClick={() => {setActive(active = "SnakeLadderLeaderboard")}}>Snake and Ladder</Link>
                            {/* <span className="dropdown-item" onClick={() => {setActive(active = "SnakeLadderLeaderboard")}}>Snake and Ladder</span> */}
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/games/ludo" onClick={() => {setActive(active = "LudoLeaderboard")}}>Ludo</Link> 
                            {/* <span className="dropdown-item" onClick={() => {setActive(active = "LudoLeaderboard")}}>Ludo</span> */}
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className={active==="Statistics"?"nav-link active":"nav-link"} aria-current="page" to="/statistics" onClick={() => {console.log("h");setActive(active = "Statistics")}}>Statistics</Link>
                    {/* <span className={active==="Statistics"?"nav-link active":"nav-link"} onClick={() => {setActive(active = "Statistics")}}>Statistics</span> */}
                </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className={active==="Signup"?"nav-link active":"nav-link"} aria-current="page" to="/join-us/signup" onClick={() => {setActive(active = "Signup")}}>Sign-Up</Link>
                    {/* <span className={active==="Signup"?"nav-link active":"nav-link"} onClick={() => {setActive(active = "Signup")}}>Sign-Up</span> */}
                </li>
                <li className="nav-item">
                <Link className={active==="Login"?"nav-link active":"nav-link"} aria-current="page" to="/join-us/login" onClick={() => {setActive(active = "Login")}}>{curruser===""?"Login":curruser}</Link>
                    {/* <% if(loggedUser == undefined){ %>
                        <Link className={active==="Login"?"nav-link active":"nav-link"} aria-current="page" to="/join-us/login">Login</Link>
                    <% }else{ %>
                        <Link className="nav-link" aria-current="page" to="/join-us/logout">Logout</Link>
                    <% } %> */}
                    {/* <span className={active==="Login"?"nav-link active":"nav-link"} onClick={() => {setActive(active = "Login")}}>Login</span> */}
                </li>
                <li className="nav-item">
                    {/* <Link className="nav-link disabled" id="loggedUser" aria-current="page">
                        <%= loggedUser %>
                    </Link> */}
                </li>
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar