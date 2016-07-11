//'use strict';

import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from './decorators/toggleOpen';


class CommentList extends Component {

    componentWillMount() {
        console.log('--', this.props);
    }
    componentDidMount() {
        console.log('--', 'mounted', this.refs.toggler);
    } //this.refs.toggler - native DOM-element
    componentWillReceiveProps(nextProps) {
        console.log('--WillReceiveProps', this.props, nextProps);
    }
    componentWillUnmount() { //для отписки при удалении компонента из DOM
        console.log('--unmointing');
    }
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
                <a href = '#' onClick = {toggleComment} ref = 'toggler'>{linkText}</a>
                {body}
            </div>
        )
    }
}

export default toggleOpen(CommentList);