import React, { Component } from 'react'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: []
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({posts: json}))
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.newPost) {
      this.state.posts.unshift(nextprops.newPost)
    }
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <li key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>  
      </li>
    ));
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {postItems}
        </ul>
      </div>
    )
  }
}

export default Posts;
