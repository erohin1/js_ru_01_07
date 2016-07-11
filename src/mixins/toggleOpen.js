export default {
    getInitialState() {
        //this.props - есть доступ
        return {
            isOpen: false
        }
    },
    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
