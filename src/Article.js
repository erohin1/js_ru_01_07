import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList'

class Article extends Component {

    static propTypes = {  // статический атрибут proposal ES7
        article: PropTypes.object.isRequired
    };

    render() {
        const {article, isOpen, openArticle} = this.props;

        const body = isOpen ? <section>{ article.text }
            <CommentList comments = {article.comments} /></section> : null;


        return (
            <div>
                <h1 onClick = {openArticle}>{ article.title }</h1>
                {body}
            </div>
        )
    }
}


export default Article