import React from 'react';
//сюда можно вставить jquery-плагин
class jqueryComponent extends Component {

    componentDidMount() {
        console.log('--', this.refs.component);
    }

    render() {
        return (
            <div ref = 'component'></div>
        )
    }
}

export default jqueryComponent;
