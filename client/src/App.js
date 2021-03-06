import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./components/LoginForm";
import MyCourses from "./components/MyCourses";
import Home from "./pages/HomePage";
import Html1 from "./pages/HTML1";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/Navbar";
import API from "./utils/API";
import Courseform from "./components/Courseform";
import Footer from "./components/Footer";
import CourseCatalog from "./components/CourseCatalog";
import UnitForm from "./components/Unitform";
import ActivityForm from "./components/ActivityForm";
import Unit from "./components/Units";

class App extends Component {
  state = {
    loggedIn: false,
    email: null,
    isInstructor: false,
    course: null,
  };

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    API.getUser().then((response) => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          email: response.data.email,
          isInstructor: response.data.isInstructor,
        });
      } else {
        this.setState({
          loggedIn: false,
          email: null,
        });
      }
    });
  }

  onSubmit = (fields) => {
    console.log("App comp got: ", fields);
  };

  render = () => {
    return (
      <Router>
        <NavBar
          updateUser={this.updateUser}
          isInstructor={this.state.loggedIn}
          user={this.state.email}
          loggedIn={this.state.loggedIn}
        />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            exact
            path="/dashboard"
            render={() => <MyCourses loggedIn={this.state.loggedIn} />}
          />
          <Route exact path="/add" component={UserSignUp} />
          <Route
            exact
            path="/login"
            render={() => <UserLogin updateUser={this.updateUser} />}
          />
          <Route exact path="/unit" component={UnitForm} />
          <Route exact path="/units" component={Unit} />
          <Route exact path="/activites" component={ActivityForm} />
          <Route
            exact
            path="/html/1"
            render={() => <Html1 updateUser={this.updateUser} />}
          />
          <Route exact path="/course" component={Courseform} />
          <Route exact path="/all-courses" component={CourseCatalog} />
          <Route path="*" component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    );
  };
}

export default App;
