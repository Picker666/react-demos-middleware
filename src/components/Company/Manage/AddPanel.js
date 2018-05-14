import React, {Component} from 'react';
import { compose, bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { AddStaff, ChangeStaffData } from '../../HOC';
import { addAction, changeAction } from '../../../redux/company';

const Enhancer = compose(ChangeStaffData, AddStaff);

class AddPanel extends Component {
    constructor (props) {
        super(props);
        this.state={
            name: props.name || '',
            staffId: props.staffId || '',
            department: props.department || '',
            work: props.work || '',
            key: props.work || 'pp'
        };
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value})
    };

    handleCancel = () => {
        const { cancelAdd } = this.props;
        cancelAdd();
        this.setState={
            name: '',
            staffId: '',
            department: '',
            work: ''
        };
    }

    handleComfirm = () => {
        const { isModify } = this.props;
        if (isModify) {
            this.changeStaffData();
        } else {
            this.addStaff()
        };
    };

    render () {
        const { name, staffId, department, work } = this.state;
        return (
            <li key={'pp'}>
                <span>
                    <input type="text" placeholder="name" name='name' onChange={this.handleChange} value={name} />
                </span>
                <span>
                    <input type="text" placeholder="StaffId" name='staffId' onChange={this.handleChange} value={staffId} />
                </span>
                <span>
                    <input type="text" placeholder="Department" name='department' onChange={this.handleChange} value={department} />
                </span>
                <span>
                    <input type="text" placeholder="Work" name="work" onChange={this.handleChange} value={work} />
                </span>
                <span>
                    <button onClick={this.handleCancel}>{'Cancel'}</button>
                    <button onClick={this.handleComfirm}>{'Confirmation'}</button>
                </span>
            </li>
        );
    }
};

export default connect(state => ({
    
  }), dispatch => ({
    dispatch,
    actions: bindActionCreators({
        addAction,
        changeAction
    }, dispatch)
  }))(Enhancer(AddPanel));
