// import React from 'react';

const DeleteStaff = WrapperComponent => {
    return class Enhancer extends WrapperComponent {
        deleteStaff = (data) => {
            const { actions, dispatch } = this.props;
            const { staffId } = data;

            const action = (dispatch, getState) => {
                const reducers = getState().company;
                console.log(reducers);
                setTimeout(() => {
                    actions.deleteAction({staffId});
                }, 3000);
            };
            dispatch(action);
            console.log('this is data for delete staff: ', data);
        };

        render () {
            return super.render();
        };
    };
};

export default DeleteStaff;