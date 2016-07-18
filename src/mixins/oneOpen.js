export default {
    getInitialState () {
        return {
            openArticleId: null
        }
    },
    openArticle(id) {
        return evt =>
            this.setState({
                openArticleId: id
            })
    }
}
