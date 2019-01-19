import React from 'react'
import classes from './Spinner.css'
import TrashIcon from '../Icons/TrashCan/TrashCan'

const spinner = () => (
    <div className={classes.spinner}>
    <TrashIcon spin={true}/>

    </div>
);

export default spinner