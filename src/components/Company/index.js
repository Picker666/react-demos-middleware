import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import FontEnd from './FontEnd';
import BackEnd from './BackEnd';
import Test from './Test';
import Manage from './Manage';

class Company extends Component {
    componentDidMount () {
        console.log('this is Company...');
    };

    render () {
        const { match } = this.props;
        // console.log(match);
        return (
            <div>
                <p>{'this is Company.....'}</p>
                <nav>
                    <NavLink className="resetNavLink" activeClassName='navActive' to='/company/fontEnd'>{'FontEnd'}</NavLink>&nbsp;&#x3000;
                    <NavLink className="resetNavLink" activeClassName='navActive' to='/company/backEnd'>{'BackEnd'}</NavLink>&nbsp;&#x3000;
                    <NavLink className="resetNavLink" activeClassName='navActive' to='/company/test'>{'Test'}</NavLink>&nbsp;&#x3000;
                    <NavLink className="resetNavLink" activeClassName='navActive' to='/company/manager'>{'Manager'}</NavLink>
                </nav>
                <Switch>
                    <Route exact path={`${match.path}/:department`} render={(props) => {
                            const { match: { params: {department} }} = props;
                            console.log(department);
                            const temp = {fontEnd: <FontEnd />, backEnd: <BackEnd />, test: <Test />, manager: <Manage />}
                            return temp[department];
                        }}
                    />
                    <Redirect to='company/fontEnd/' />
                </Switch>
            </div>
        );
    };
};

export default Company;
