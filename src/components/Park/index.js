import React, { Component } from 'react';

class Park extends Component {
    componentDidMount () {
        console.log('this is Park...');
    };

    render () {
        return (
            <div>
                <p>{'this is Park.....'}</p>
            </div>
        );
    };
};

export default Park;