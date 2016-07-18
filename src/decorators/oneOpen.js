import React, {Component as ReactComponent} from 'react';

export default (Component) => class decoratedOneOpen extends ReactComponent {
    state = {
        openItemId: null
    };

    openItem = id => evt => { //carrying(паттерн функц.програм-ния) - в замыкании сохраняем id и дальше можем создавать несколько экземпляров такой ф-ции
        if(evt) evt.preventDefault();
        this.setState({ openItemId: id })
    };
    closeItem = () => {
        this.setState({
            openItemId: null
        });
        console.log('111', this.state.openItemId); //маркер отработки ф-ции (показывает еще старый openItemId, т.к. setState - асинхронный метод и еще не изменил openItemId)
    };

    isOpenItem = (id) => this.state.openItemId == id;

    componentWillUpdate(nextProps, nextState) { //мой вариант, чтобы был открыт только один пункт - меняю nextState.openItemId

        if(nextState.openItemId == this.state.openItemId) {
            nextState.openItemId = null;
            //this.closeItem();
        }
        //console.log(nextState, this.state);
        return this.next = nextState;
    };


    render() {
        //console.log(this.next);
        return <Component {...this.props}
                          openItem = {this.openItem}
                          closeItem = {this.closeItem}
                          isOpenItem = {this.isOpenItem}/>
    }
}