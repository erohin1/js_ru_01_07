export default {
    getInitialState () {
        //this.props
        return {
            openItemId: null
        }
    },
    toggleOpenItem(id) {
        return evt => {
            if(evt) evt.preventDefault();
            this.setState({
                openItemId: id == this.state.openItemId ? null : id
            })
        }
    },
    isOpenItem(id) {
        return this.state.openItemId == id;
    }
}
