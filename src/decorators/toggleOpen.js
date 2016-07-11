import React from 'react';

export default (Component) => class DecoratedComponent extends React.Component {
    state = {
        isOpen: false
    };

    componentWillReceiveProps() { //не отрабатывает, т.к. props никакие не приходят, меняется только состояние state
        console.log('---WillReceive');
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('---WillUpdate', nextProps, nextState);
    }

    toggleComment = (evt) => {
        evt.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return <Component {...this.props} isOpen = {this.state.isOpen} toggleComment = {this.toggleComment} />;
    }
}
