//'use strict';

import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from './decorators/toggleOpen';


class CommentList extends Component {

    //в классе, св-ва объекту ставятся только в constructor
    //static console.log(this.props); // как вызвать ф-цию в теле класса?

    render() {
        const {comments, isOpen, toggleComment}  = this.props;
        if(!comments || !comments.length) return <h3>no comments yet</h3>;

        const commentItems = comments.map(comment =>
            <li key = {comment.id}><Comment comment = {comment} /></li>);
        const body = isOpen ? <ul>{commentItems}</ul> : null;
        const linkText = isOpen ? 'Close comments' : 'Open comments';

        return (
            <div>
                <p><a href = '#' onClick = {toggleComment}>{linkText}</a></p>
                {body}
            </div>
        )
    }
}

export default toggleOpen(CommentList);