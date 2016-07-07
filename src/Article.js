import React, { Component } from 'react';
import CommentList from './CommentList'

class Article extends Component {
    state = {
        isOpen: false,
        isComment: false,
        name: 'open'
    };

/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
*/

    render() {
        const article = this.props.article;
//      const { article } = this.props
//      const { article: { title, text } } = props
        const { isOpen } = this.state;
        const body = isOpen ? <section>{ article.text }</section> : null
        const {isComment} = this.state;
        const bodyComment = isComment ? <section><CommentList comments = {article.comments} /></section> : null
        let {name} = this.state;
        name = this.state.isComment ? 'Close' : 'Open';

        return (
            <div>
                <h1 onClick = {this.toggleOpen}>{ article.title }</h1>
                {body}
                {bodyComment}
                <a href = '' onClick = {this.toggleComment}>{name} comment</a>
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    toggleComment = (ev) => {
        ev.preventDefault();
        this.setState({
            isComment: !this.state.isComment
        })
}
}



/*
function Article(props) {
    const article = props.article
//    const { article: { title, text } } = props

    return (
        <div>
            <h1>{ article.title }</h1>
            <section>{ article.text }</section>
        </div>
    )
}
*/

export default Article