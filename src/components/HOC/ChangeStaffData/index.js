// import React from 'react';

const ChangeStaffData = WrapperComponent => {
    return class Enhancer extends WrapperComponent {
        
        changeStaffData = () => {
        const { name, staffId, department, work } = this.state;
           const { actions: { changeAction } } = this.props;
           changeAction({ name, staffId, department, work })
           this.handleCancel();
        };

        render () {
            return super.render();
        };
    };
};

export default ChangeStaffData;