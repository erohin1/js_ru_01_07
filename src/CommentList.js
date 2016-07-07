import React from 'react';
import Comment from './Comment';


function CommentList(props) {
    const { comments } = props;

    const listItems = comments.map((comment) => <li key = {comment.id}><Comment comment = {comment} /></li>);

    return (
        <div>
            <h3>Comment list</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default CommentList