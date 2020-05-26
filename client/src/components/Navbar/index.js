import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./style.css";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      redirect: null,
    };
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("api/users/logout")
      .then((response) => {
        this.setState({ redirect: "true" });
      })
      .catch((error) => {
        console.log("Logout error " + error);
      });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    const loggedIn = this.props.loggedIn;

    return (
      <header class="header">
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container">
            <a href="/" class="navbar-brand scrollTo">
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/logo.png"}
              />
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarcollapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              class="navbar-toggler navbar-toggler-right"
            >
              <span class="fa fa-bars"></span>
            </button>
            {loggedIn ? (
              <div id="navbarcollapse" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a href="/" class="nav-link link-scroll">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <div class="dropdown">
                      <a
                        href="#references"
                        class="nav-link link-scroll dropbtn"
                      >
                        Courses
                      </a>
                      <div class="dropdown-content">
                        <a href="/dashboard">My Courses</a>
                        <a href="/all-courses">All Courses</a>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link link-scroll">
                      Become An Instructor
                      <br />
                      Add A Course
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link link-scroll"
                      href="/login"
                      onClick={this.logout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div id="navbarcollapse" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a href="/" class="nav-link link-scroll">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/all-courses" class="nav-link link-scroll dropbtn">
                      Courses
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/login" class="nav-link link-scroll">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
