import React, {Component} from 'react';
import './Message.css';

class Post extends Component {
    render() {
        return (
            <div className="post">
                <span className="nickname">{this.props.value.nickname}: </span>
                <span className="message">{this.props.value.message}</span>
                <button className="remove-button" onClick={this.props.onRemove}>Удалить</button>
            </div>
        )
    }
}

export default Post;