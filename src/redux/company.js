import { createAction, handleActions } from 'redux-actions';

const defaultState = {
    staffData: [{staffId: 74, name: 'Picker', department: 'B/E', work: 'write code for UI'},
        {staffId: 73, name: 'Kobe', department: 'B/E', work: 'write code for data'},
        {staffId: 72, name: 'Could', department: 'F/E', work: 'write code and test'},
        {staffId: 71, name: 'Gavin', department: 'All', work: 'look at them writting code and testing.'}
    ],
    name: 'ShineMo',
    orgId: 12346789
};

const ADD = 'ADD';
const DELETE = 'DELETE';
const CHANGE = 'CHANGE';
const SHOW = 'SHOW';

export const addAction = createAction(ADD);
export const deleteAction = createAction(DELETE);
export const changeAction = createAction(CHANGE);
export const showAction = createAction(SHOW);

export default handleActions({
    [ADD]: ( state, action ) => {
        const { payload: { name, staffId, department, work } } = action;
        const { staffData } = state;
        return { ...state, staffData: [ ...staffData, { name, staffId, department, work }] };
    },
    [DELETE]: ( state, action ) => {
        const { payload: { staffId } } = action;
        const { staffData } = state;
        const staffDataNew = staffData.filter(item => {
            return item.staffId !== staffId
        });
        return { ...state, staffData: staffDataNew };
    },
    [CHANGE]: ( state, action ) => {
        const { payload: { name, staffId, department, work } } = action;
        const { staffData } = state;
        const staffDataNew = staffData.map(item => {
            const { staffId: _staffId } = item;
            if (staffId === _staffId) {
                return { name, staffId, department, work };
            } else {
                return item;
            }
        });
        return { ...state, staffData: staffDataNew };
    },
    [SHOW]: ( state, action ) => {
        return { ...state, ...defaultState };
    }
}, defaultState);
