import React from 'react'
import classes from './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const search = (props) => (
    <div className={classes.Search}>

        <div className={classes.inputGroup}>
            <div className={classes.inputGroupArea}><input type="text"  /></div>
            <div className={classes.inputGroupIcon}><FontAwesomeIcon icon={faSearch}  rotation={90}/></div>
        </div>
    </div>
)

export default search