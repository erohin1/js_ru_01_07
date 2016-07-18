import React, {Component} from 'react';
import Article from './Article';
import oneOpen from './decorators/oneOpen';

class ArticleList extends Component {

    render() {
        const { articles, isOpenItem, toggleOpenItem } = this.props;

        const listItems = articles.map((article) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {isOpenItem}
                     openArticle = {toggleOpenItem(article.id)}
            />
        </li>);
        return (//важно!!! Оставили API (isOpen,openArticle) для дочерних классов такой же
            <div>
                <h1>Article list</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default oneOpen(ArticleList);