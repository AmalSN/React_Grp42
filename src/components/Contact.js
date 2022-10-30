import React, { useState } from "react";
import styles from "./Form.module.css";

const emailValidator = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const Form = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setMail(e.target.value);
  };

  const msgHandler = (e) => {
    setMsg(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length < 4) {
      alert("Name should contain atleast 4 chars");
      return;
    }
    if (emailValidator(mail) ) {
      alert("Invalid email");
      return;
    }
    if (msg.length === 0) {
      alert("Message cannot be empty");
      return;
    }
    alert("Success");
  };

  return (
    <div className={styles.background}>
      <form className={styles.card} onSubmit={submitHandler}>
        <h2>Send us a message</h2>
        <div className={styles.line}>
          <div className={styles.field}>
            <label>
              Name
              <sup>*</sup>
            </label>
            <input type="text" placeholder="Username" onChange={nameHandler} />
          </div>
          <div className={styles.field}>
            <label>
              Email
              <sup>*</sup>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              onChange={emailHandler}
            />
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.field}>
            <label>Did You Contact us before?</label>
            <div className={styles.radio}>
              <input type="radio" name="contact"></input>
              <label>Yes</label>
            </div>
            <div className={styles.radio}>
              <input type="radio" name="contact"></input>
              <label>No</label>
            </div>
          </div>
          <div className={styles.field}>
            <label>Are you a member?</label>
            <div className={styles.radio}>
              <input type="radio" name="contact"></input>
              <label>Yes</label>
            </div>
            <div className={styles.radio}>
              <input type="radio" name="contact"></input>
              <label>No</label>
            </div>
          </div>
        </div>
        <div className={styles.msg}>
          <div className={styles.field}>
            <label>
              Message
              <sup>*</sup>
            </label>
            <input
              type="text"
              placeholder="Elaborate your concern"
              onChange={msgHandler}
            />
          </div>
        </div>
        <div className={styles.btn}>
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Form;