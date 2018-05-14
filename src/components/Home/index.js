import React, { Component } from 'react';

class Home extends Component {

    componentDidMount () {
        console.log('this is Home...');
    };

    render () {
        return <div>
                <p>{'this is Home.....'}</p>
            </div>
    };
};

export default Home;