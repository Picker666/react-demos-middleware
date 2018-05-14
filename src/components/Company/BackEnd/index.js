import React, { Component } from 'react';

class BackEnd extends Component {
    componentDidMount () {
        console.log('this is BackEnd...');
    };

    render () {
        // const { match } = this.props;
        // console.log(match)
        return (
            <div>
                <h4>{'this is BackEnd.....'}</h4>
            </div>
        );
    };
};

export default BackEnd;