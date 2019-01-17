import React from 'react'
import classes from './Backdrop.css'
import Spinner from '../Spinner/Spinner'

const backdrop = (props) =>(
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}><Spinner/></div> : null
);

export default backdrop