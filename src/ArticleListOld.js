import React from 'react';
import Article from './Article';
import oneOpen from './mixins/oneOpen';

const ArticleListOld = React.createClass({

    mixins: [oneOpen],  // [] - необходимы, т.к. это вычисляемое значение (св-ва импортируемого миксина должны подмешаться в этот код создания класса)

    render() {console.log(this.isOpen);
        const { articles } = this.props;

        const listItems = articles.map((article) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {this.isOpenItem}
                     openArticle = {this.toggleOpenItem(article.id)}
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