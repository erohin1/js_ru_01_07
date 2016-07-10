import React from 'react';
import CommentList from './CommentList';
import toggleOpen from './mixins/toggleOpen';

const ArticleOld = React.createClass({

    mixins: [toggleOpen],
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
});

export default ArticleOld;