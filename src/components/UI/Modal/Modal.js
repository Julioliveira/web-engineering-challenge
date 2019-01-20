import React, { Component }from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Auxiliar/Auxiliar'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    componentWillUpdate(){
        console.log('MODAL WILL UPDATE')
    }
    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} loader={false} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <div className={classes.Close}><strong onClick={this.props.modalClosed}>X</strong></div>
                    {this.props.children}
                </div>
            </Aux>)
    }
}
export default Modal