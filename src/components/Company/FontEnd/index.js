import React, { Component } from 'react';

class FontEnd extends Component {
    componentDidMount () {
        console.log('this is FontEnd...');
    };

    render () {
        return (
            <div>
                <h3>{'this is FontEnd.....'}</h3>
            </div>
        );
    };
};

export default FontEnd;