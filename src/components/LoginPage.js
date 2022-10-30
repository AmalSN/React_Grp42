import React from "react";
import lgpg from "./LoginPage.module.css"
import {useState} from "react"

export default function LoginPage({users,curruser,setCurruser}) {

  const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) => {
      event.preventDefault();
      let flag=0
      users.forEach((x)=>{
        if(x.uName===inputs.uName&&x.password===inputs.password){
          flag=1;
          setCurruser(curruser=inputs.uName)
        }
      })
      if(!flag){
        alert("Wrong Credentials")
      }
    }

  return (
    <div className={lgpg.bgimage}>
      <div
        className="modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Username/Password is wrong
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Sign-Up or enter correct credentials</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${lgpg.lgpgcontainer} overflow-hidden`}>
        <div className="row gx-5">
          <div className="col">
            <div className="p-5 border bg-light">
              <h1 className={`${lgpg.h3} mb-3 fw-normal`}>Login Here</h1>
              <br />
              <form
                id="emailForm"
                className="form-horizontal"
                onSubmit={handleSubmit}
              >
                <div className="form-floating mb-3">
                  <input
                    type="uName"
                    className="form-control"
                    name="uName"
                    id="uName"
                    placeholder="name@example.com"
                    size="30"
                    required
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInput">Username</label>
                </div>

                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  <br />
                  <div className="checkbox mb-3">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                  <button
                    className="float-end btn btn-outline-success"
                    type="submit"
                  >
                    Login
                  </button>
                  <span className="float-start text-dark">
                    Forgot <a href="/">password?</a>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-Dark">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/ludo.avif" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/snake and ladder.jpg" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/tic.jpg" className="d-block w-100" alt="..."/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}