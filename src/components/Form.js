import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e) {
    this.setState({[e.target.name]: [e.target.value]});
  }

  onNewPost(newPost) {
    this.props.newPost(newPost);
  }

  onSubmit(e) {
    e.preventDefault();

    const postData = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'aplication/json'
      },
      body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(post => this.onNewPost({
      id: post.id,
      title: postData.title[0],
      body: postData.body[0]
    }))
  }

  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input type="text" name="title" id="title" value={this.state.title} onChange={this.onChange} />
          </div>
          <br />
          <div>
            <label htmlFor="body">Body</label>
            <br />
            <input type="text" name="body" id="body" value={this.state.body} onChange={this.onChange} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
