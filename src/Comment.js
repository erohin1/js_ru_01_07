import React, {PropTypes} from 'react';


function Comment(props) {
    if(!props.comment) return <h3>Something</h3>;
    const {comment: {user, text}} = props;

    return (
        <div>
            <p>{ text }</p>
            <b>{ user }</b>
        </div>
        )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    })
};

export default Comment;