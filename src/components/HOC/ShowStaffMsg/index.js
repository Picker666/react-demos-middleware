// import React from 'react';

const ShowStaffMsg = WrapperComponent => {
    return class Enhancer extends WrapperComponent {
        showStaffMsg = () => {
            const { actions } = this.props;
            actions.showAction();
        };

        render () {
            return super.render();
        };
    };
};

export default ShowStaffMsg;