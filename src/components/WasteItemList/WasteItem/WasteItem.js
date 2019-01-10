import React from 'react';
import classes from './WasteItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const wasteItem = (props)=>{
    let title = props.item.title
    let description = props.item.body.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;nbsp;/g, " ")
    if(description.indexOf('<ul>') == -1){
        description = '<ul><li>'+description+'</li></ul>'
    }
    let starClass = [classes.Star]
    if(props.item.favorite)
        starClass.push(classes.Green)
    let click = () =>{
        starClass.push('Green')
        props.click()
    }
    return(
        <div className={classes.WasteItem}>
            <div onClick={click} ><FontAwesomeIcon icon={faStar} className={starClass.join(' ')}/> {title}</div>
            <div dangerouslySetInnerHTML={{__html: description}} style={{textAlign: "justify"}}>
                </div>
        </div>
        )
}

export default wasteItem