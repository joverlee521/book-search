import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import MyModal from "./components/Modal";

class App extends Component {
  state = {
    modalOpen: false,
    modalMessage: "Default Modal Message"
  }

  openModal = (message) => {
    this.setState({ modalOpen: true, modalMessage: message });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  render() {
    const open = this.state.modalOpen;
    const message = this.state.modalMessage;
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Home openModal={this.openModal} /> }/>
            <Route exact path="/saved" render={() => <Saved openModal={this.openModal} /> } />
          </Switch>
          <MyModal open={open} message={message} closeModal={this.closeModal}/>
        </div>
      </Router>
    );
  }
}

export default App;
