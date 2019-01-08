import React, { Component } from 'react';

import Aux from '../Auxiliar/Auxiliar'
import classes from './Layout.css'
import Toolbar from '../../components/Toolbar/Toolbar'
import Search from '../../components/Search/Search'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }
    sideDrawerOpenedHandler = () =>{
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        console.log(classes)
        return(
            <Aux>
                <Toolbar toggle={this.sideDrawerOpenedHandler}/>
                <Search/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;