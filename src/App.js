import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Posts from './components/Posts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleNewPost: {}
    }
  }

  handleNewPost = (newPost) => {
    this.setState({newPost: newPost});
  }
  
  render() {
    return (
      <div className="App">
        <h1>React Demo</h1>
        <hr />
        <Form newPost={this.handleNewPost} />
        <hr />
        <Posts newPost={this.state.newPost} />
      </div>
    );
  }
}

export default App;
