import React, {Component} from 'react';

class Article extends Component {
    render() {
        console.log('---', this.props);
        //const {article} = props;
        const article = this.props.article;
        return (
            <div>
            <h1>{article.title}</h1>
        <section>{article.text}</section>
        </div>
    )
    }
}

/*function Article(props) {
    console.log('---', props);
    //const {article} = props;
    const article = props.article;
    return (
        <div>
            <h1>{article.title}</h1>
            <section>{article.text}</section>
        </div>
    )
}*/

export default Article;