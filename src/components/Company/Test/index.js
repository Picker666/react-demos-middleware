import React, { Component } from 'react';

class Test extends Component {
    componentDidMount () {
        console.log('this is Test...');
    };

    render () {
        return (
            <div>
                <h5>{'this is Test.....'}</h5>
            </div>
        );
    };
};

export default Test;