import React, {Component} from 'react';


class Comment extends Component {

    render() {
        const {comment: {user, text}} = this.props;

        return (
            <div>
                <span>{user}</span>
                <p>{text}</p>
            </div>
        )
    }
}

export default Comment;