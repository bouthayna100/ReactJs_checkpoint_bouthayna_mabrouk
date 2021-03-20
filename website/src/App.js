import Pc from './pc.jpg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="container" >
        <nav class="nav">
          <a href="" className="logo">Training Center</a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
          <ul className="menu">
            <li><a href="#work">Our Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#training">Training</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <img src={Pc} width="100%" alt="" className="img-pc" />

        <div className="row">

          <div className="col-md-4 ml-auto mr-auto">

            <form className="form-contact">
              <h3> Contact Us </h3>

              <div className="form-group">

                <div className="input-container">

                  <i class="fa fa-user icon"></i>

                  <input type="text" className="form-control" placeholder="Enter name" />
                </div>
              </div>

              <div className="form-group">
                <div className="input-container">

                  <i class="fa fa-envelope icon"></i>

                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>    </div>
              <div className="form-group">
                <div className="input-container">

                  <i class="fa fa-phone icon"></i>

                  <input type="text" className="form-control" placeholder="Enter number phone" />
                </div>    </div>

              <div className="form-group">
                <div className="input-container">

                  <i class="fa fa-edit icon"></i>

                </div>

                <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>


              </div>

              <button type="submit" className="btn btn-primary btn-block">Submit</button>

            </form>

          </div>

        </div>
        <footer class="footer">

          <p>
            ©Copyright 2021 with TrainingCenter.com. All rights reserved.
        </p>
          
        </footer>
      </div>
     
    </div>

  );


}


export default App;