import React, {Component} from 'react';
import './MessageForm.css'
import { connect } from "react-redux";
import { changePostsNum } from "../actions";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onSubmit({nickname: this.nickname.value, message: this.message.value})
        this.nickname.value = ''; 
        this.message.value = '';
        this.total_news_num += 1;
        this.props.changeComponentPostsNum(this.props.num.data + 1);
        event.preventDefault();
    }

    render() {
        return (
            <div className="post-form">
                <form onSubmit={this.handleSubmit}>
                    <label className="nickname-label">
                        Ник <input type="text" size={10} ref={(input) => this.nickname = input} />
                    </label>
                    <label className="message-label">
                        Сообщение <input type="text" size={40} ref={(input) => this.message = input} />
                    </label>
                    <button className="button">Отправить</button>
                </form>
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
)(PostForm)

//export default PostForm;