//'use strict';

import React, {Component} from 'react';
import Comment from './Comment';


class CommentList extends Component {
    state = {
        isOpen: false
    };
    //в классе, св-ва объекту ставятся только в constructor
    //static console.log(this.props); // как вызвать ф-цию в теле класса?
    tmp() {console.log(this);};
    render() {
        const {comments}  = this.props;
        let linkText = comments && (this.state.isOpen ? 'Close comments' : 'Open comments');
        const listItems = this.state.isOpen && comments ? comments.map((comment) =>
            <li key = {comment.id}><Comment comment = {comment} /></li>) : null;


        return (
            <div>
                <h3>Comment list</h3>
                <ul>
                    {listItems}
                </ul>
                <p><a href = '' onClick = {this.toggleComment}>{linkText}</a></p>
            </div>
        )
    }

    toggleComment = (evt) => {
        evt.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}

export default CommentList