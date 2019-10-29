import React, {Component} from 'react';
import './Feed.css';
import Post from '../message/Message.js';
import PostForm from '../message-form/MessageForm.js';
import { connect } from "react-redux";
import { changePostsNum } from "../actions";

class Feed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [
          {nickname: "Лапик", message: 'Всем привет в этом чатике!'},
          {nickname: "xxXГеймерXxx", message: 'Прифки!!!!!'}
        ]
      }
      
      this.removePost = this.removePost.bind(this);
      this.handleNewPost = this.handleNewPost.bind(this);
    }

    removePost(removeIndex) {
      this.setState({posts:
          this.state.posts.filter((item, index) =>
            index !== removeIndex)})
      
      this.props.changeComponentPostsNum(this.props.num.data - 1);
    }  

    handleNewPost(post) {
      this.setState({
        posts: this.state.posts.concat([post])
      });
    }

    render() {
      const posts = this.state.posts.map((post, index) =>
        <Post key={index} value={post} onRemove={() => this.removePost(index)}/>
      );
      return (
        <div className="feed">
          <PostForm onSubmit={this.handleNewPost} />
          <div className="posts-num">
            Количество сообщений: {this.props.num.data}
          </div>
          {posts}
        </div>
      )
    }
  }

  export default connect(
    state => ({num: state.num}),
    dispatch => ({
      changeComponentPostsNum(newnum) {
        dispatch(changePostsNum(newnum));
      }
    })
  )(Feed);
  

  //export default Feed;