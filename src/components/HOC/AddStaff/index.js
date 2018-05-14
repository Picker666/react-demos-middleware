// import React from 'react';

const AddStaff = WrapperComponent => {
    return class Enhancer extends WrapperComponent {
        
        addStaff = () => {
           const { name, staffId, department, work } = this.state;
           const { actions: { addAction } } = this.props;
           addAction({ name, staffId, department, work })
           this.handleCancel();
        };

        render () {
            return super.render();
        };
    };
};

export default AddStaff;