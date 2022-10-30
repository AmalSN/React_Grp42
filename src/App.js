import MainPage from "./components/MainPage"
import Statistics from "./components/Statistics";
import Layout from "./layout/Layout"
import Ludo from "./components/Ludo";
import Contact from "./components/Contact";
import SnakeandLadder from "./components/SnakeandLadder";
import TicTacToe from "./components/TicTacToe";
import UserInfo from "./components/UserInfo";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react";
import './App.css';
import Signup from "./components/Signup";
import LoginPage from "./components/LoginPage";

function App() {
  const [active,setActive] = useState("Home")
  const [users,setUsers] = useState([])
  const [curruser,setCurruser] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout active={active} setActive={setActive} curruser={curruser}/>}>
            <Route index element={<MainPage/>}/>
            <Route path="join-us/user" element={<UserInfo/>}/>
            <Route path="contact-us" element={<Contact/>}/>
            <Route path="games/tic-tac-toe" element={<TicTacToe/>}/>
            <Route path="games/snake-ladder" element={<SnakeandLadder/>}/>
            <Route path="games/ludo" element={<Ludo/>}/>
            <Route path="statistics" element={<Statistics/>}/>
            <Route path="join-us/signup" element={<Signup users={users} setUsers={setUsers}/>}/>
            <Route path="join-us/login" element={<LoginPage users={users} curruser={curruser} setCurruser={setCurruser}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
