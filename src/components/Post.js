import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../actions/postActions'

class Post extends Component {

  //method to delete posts
  handleClick = () => {
    this.props.deletePost(this.props.post.id); // use dispatcher function passing post id
    this.props.history.push('/') // redirect user to main page
  }

  render() {

    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
</div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

// pass redux store data to component props
const mapStateToProps = (state, ownProps) => {
  // get info about the Route parameters
  let id = ownProps.match.params.post_id; 
  // return object to connect with comp props 
  return {
          // get post with specific id
        post: state.posts.find((post) => { 
          return post.id === id 
        })
  }

} 

// map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    // object with methods to be grabbed by props object
    // so props get method deletePost
    deletePost: (id) => {
      dispatch(deletePost(id)) // pass func that returns action object (we import that func above)
    }
    // using dispatch() to send actions
  }
}
// connect(takes stateToProps and DispatchToProps mapping funcs)(component name)
export default connect(mapStateToProps, mapDispatchToProps)(Post);
