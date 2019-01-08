import React from 'react'
import classes from './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const toolbar = (props) => (
    <div className={classes.Search}>
        <div className={classes.InputDiv}>
            <input type="text"></input>
            <button><FontAwesomeIcon icon={faSearch}  rotation={90}/></button>
        </div>
    </div>
)

export default toolbar