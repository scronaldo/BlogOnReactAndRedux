import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
  render(){
    // get posts from our redux store and this property already bound to comp props object
    const { posts } = this.props // using desctructuning { same name } - (this.props.posts)
    const postList = posts.length ? ( // if posts have any length
      posts.map(post => { // create new array with map (react will transform it to merged jsx)
        return ( // return for each new array element
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

// map redux store state to component props
const mapStateToProps = (state) => {
  // return object to merge with props
  return {
    posts: state.posts
  }
}

// using connect function to tie up this component with REDUX store
export default connect(mapStateToProps)(Home)