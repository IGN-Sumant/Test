import React from "react";
import "../styles/Home.css";
import logo from "../images/logo.png";
import sub1 from "../images/sub1.png";
import sub2 from "../images/sub2.jpg";
import sub3 from "../images/sub3.png";
import sub4 from "../images/sub4.jpg";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="head-section">
        <img src={logo} className="logo"></img>
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <nav class="navbar navbar-expand-md">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="nav navbar-nav nav-pills" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="pill" href="#HOME">HOME</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#ARTICLES">ARTICLES</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#AUDIO">AUDIO</a>
                  </li>    
                </ul>
              </div>  
            </nav>
          </div>
          <div className="col-md-6 col-lg-6">
            <form className="form-inline d-flex justify-content-center">
              <div className="input-group">
                <div className="input-group-prepend">
                <button className="btn-search" type="submit"><i className="fa fa-search"></i></button>
                </div>
                <input type="text" className="form-control searchBox" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
            </form>
          </div>
          <div className="col-md-12 col-lg-12 body-section">
            <h3 className="title">Join us today</h3>
            <div className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>
        <div className="row subSection">
            <div className="col-xs-12 col-sm-12  col-md-3 col-lg-3">
              <img className="subimg" src={sub1}></img>
              <div className="shortDesc">Spend time smart</div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="col-xs-12 col-sm-12  col-md-3 col-lg-3">
              <img className="subimg" src={sub2}></img>
              <div className="shortDesc">Audio podcast</div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="col-xs-12 col-sm-12  col-md-3 col-lg-3">
              <img className="subimg" src={sub3}></img>
              <div className="shortDesc">Boost your time</div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="col-xs-12 col-sm-12  col-md-3 col-lg-3">
              <img className="subimg" src={sub4}></img>
              <div className="shortDesc">Quality</div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
        <div className="text-center btn-section">
          <button type="button" className="btn btn-signup">Sign up</button>
          <button type="button" className="btn btn-login">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Home;