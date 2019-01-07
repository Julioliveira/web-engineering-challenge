import React, { Component } from 'react';

import classes from './Layout.css';

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
        return(
            // <Aux>
            //     <Toolbar toggle={this.sideDrawerOpenedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            //</Aux>
        );
    }
}

export default Layout;