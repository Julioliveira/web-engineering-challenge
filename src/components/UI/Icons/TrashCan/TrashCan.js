import React from 'react'
import classes from './TrashCan.css'

const trashIcon = (props) => {

    let trashClasses = [classes.trashDiv]
    if (props.spin) {
        trashClasses.push(classes.spin)
    }
    return (
        <div className={trashClasses.join(' ')}>
            <div className={classes.trashLid}> </div>
            <div className={classes.can} >
                <div className={classes.trashLine1} ></div>
                <div className={classes.trashLine2} ></div>
                <div className={classes.trashLine3} ></div>
            </div>
        </div>
    )
}

export default trashIcon