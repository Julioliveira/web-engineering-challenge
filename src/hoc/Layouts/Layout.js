import React, { Component } from 'react';

import Aux from '../Auxiliar/Auxiliar'
import classes from './Layout.css'
import Toolbar from '../../components/Toolbar/Toolbar'
import Search from '../../components/Search/Search'

class Layout extends Component {
    state={
        searchString: ""
    }
    searchValueHandler = (event)=>{
        this.setState({searchString: event.target.value})
        console.log(this.state)
    }
    handleKeyPress = (event) =>{
        if(event.key === 'Enter'){
            this.props.search(this.state.searchString)
        }
    }
    render(){
        return(
            <Aux>
                <Toolbar toggle={this.sideDrawerOpenedHandler}/>
                
                <Search 
                    search={this.props.search} 
                    searchString={this.state.searchString}
                    searchValueHandler={this.searchValueHandler} 
                    handleKeyPress={this.handleKeyPress}/>
                    
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;