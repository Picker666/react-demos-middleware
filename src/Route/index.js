import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import Company from '../components/Company';
import Park from '../components/Park';
import './index.scss';

class Main extends Component {
    // constructor (props) {
    //     super(props);
    // };
    componentDidMount () {
        console.log('this is Main...');
    };

    render () {
        return (
            <main className={'mainSec'}>
                <nav>
                    <NavLink className="resetNavLink" activeClassName='navActive' to='/home'>{'Home'}</NavLink>&nbsp;&#x3000;
                    <NavLink className="resetNavLink" activeClassName='navActive' to='/company'>{'Company'}</NavLink>&nbsp;&#x3000;
                    <NavLink className="resetNavLink" activeClassName='navActive' to='/park'>{'park'}</NavLink>
                </nav>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route path='/company' component={Company} />
                    <Route exact path='/park' component={Park} />
                    <Redirect to='/home' />
                </Switch>
            </main>  
        )
    }
};

export default Main;