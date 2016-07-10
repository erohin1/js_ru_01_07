import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList'

class Article extends Component {
    state = {
        isOpen: false
    };
    static propTypes = {  // статический атрибут proposal ES7
        article: PropTypes.object.isRequired
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
        const body = isOpen ? <section>{ article.text }
            <CommentList comments = {article.comments} /></section> : null;


        return (
            <div>
                <h1 onClick = {this.toggleOpen}>{ article.title }</h1>
                {body}
            </div>
        )
    }

    toggleOpen = (evt) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}


export default Article