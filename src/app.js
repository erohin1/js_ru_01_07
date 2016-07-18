import { articles } from './fixtures'
import ArticleList from './ArticleList'
import Article from './Article'
import React from 'react'
import { render } from 'react-dom'

//console.log('333');  // маркер rerender всего DOM
//render (<Article article = {articles[0]} />, document.getElementById('container'));
render(<ArticleList articles = {articles} />, document.getElementById('container'));