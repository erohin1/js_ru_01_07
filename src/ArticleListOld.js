import React from 'react';
import Article from './Article';
import oneOpen from './mixins/oneOpen';

const ArticleListOld = React.createClass({

    mixins: [oneOpen],  // [] - необходимы, т.к. это вычисляемое значение (св-ва импортируемого миксина должны подмешаться в этот код создания класса)

    render() {
        const { articles } = this.props;

        const listItems = articles.map((article) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {article.id == this.state.openItemId}
                     openArticle = {this.openArticle(article.id)}
            />
        </li>);
        return (
            <div>
                <h1>Article list</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
});

export {ArticleListOld as ArticleList};