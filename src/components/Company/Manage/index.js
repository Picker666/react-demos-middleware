import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { AddStaff, ChangeStaffData, DeleteStaff, ShowStaffMsg } from '../../HOC';
import AddPanel from './AddPanel';
// import { list } from 'postcss';
import { addAction, deleteAction, changeAction, showAction } from '../../../redux/company';
import './index.scss';


const Enhancer = compose(AddStaff, ChangeStaffData, DeleteStaff, ShowStaffMsg);

class Manage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isReadyAdd: false,
            staffId: ''
        };
    };

    componentDidMount () {
        // console.log('this is Manage...', this.props);
    };

    getLiItem = () => {
        const { staffData } = this.props;
        const { staffId: modifyStaffId } = this.state;
        const staffMsg = staffData && staffData.map(item => {
            const { name, staffId, department, work } = item;
            if (modifyStaffId === staffId) {
                const addPanelProps = {
                    ...item,
                    key: modifyStaffId,
                    cancelAdd: this.readyModify,
                    isModify: true
                };
                return <AddPanel {...addPanelProps} />
            };
            return (
                <li key={staffId}>
                    <span>{name}</span>
                    <span>{staffId}</span>
                    <span>{department}</span>
                    <span>{work}</span>
                    <span>
                        <button onClick={this.deleteStaff.bind(this, item)}>{'Delete'}</button>
                        <button onClick={this.readyModify.bind(this, staffId)}>{'Modify'}</button>
                    </span>
                </li>
            );
        });

        return staffMsg;
    };

    readyAdd = () => {
        this.setState({isReadyAdd: true});
    };

    cancelAdd = () => {
        this.setState({isReadyAdd: false});
    };

    readyModify = (staffId) => {
        this.setState({staffId: staffId || ''});
    };

    render () {
        const { isReadyAdd } = this.state;
        return (
            <div>
                <h2>{'this is Manage panel.....'}</h2>
                <button onClick={this.showStaffMsg}>{'查询'}</button>&nbsp;&#x3000;
                <button onClick={this.readyAdd}>{'添加'}</button>
                <main>
                    <ul className={'list'}>
                        <li key={1}>
                            <span>{'Name'}</span>
                            <span>{'StaffId'}</span>
                            <span>{'Department'}</span>
                            <span>{'Work'}</span>
                            <span>{'Operation'}</span>
                        </li>
                        {this.getLiItem()}
                        {isReadyAdd &&
                            <AddPanel cancelAdd={this.cancelAdd}/>
                        }
                    </ul>
                </main>
            </div>
        );
    };
};

export default connect(state => ({
    staffData: state.company.staffData
  }), dispatch => ({
    dispatch,
    actions: bindActionCreators({
        addAction,
        deleteAction,
        changeAction,
        showAction
    }, dispatch)
  }))(Enhancer(Manage));