import React from 'react'
import WasteItem from './WasteItem/WasteItem'
import classes from './WasteItemList.css'

const wasteItemList = (props) => {
    
    let items = props.list.map((item, index) => {
        return <WasteItem key={item.id ? item.id : index} item={item} 
                    click={() => {
                            if (props.title || item.favorite)
                                props.removeFavoriteHandler(item.id)
                            else 
                                props.addFavoriteHandler(item.id)
                        }} />
    })
    let title = null
    let backgroundClasses = [classes.WasteItemList]
    if (props.title){
        title = <div className={classes.Title}>{props.title}</div>
        backgroundClasses.push(classes.GreenBackground)
        backgroundClasses.push(classes.Open)
    }
    if(props.list.length < 1)
        backgroundClasses.push(classes.Close)
    
    return (
        <div className={backgroundClasses.join(' ')}>
            {title}
            {items}
        </div>
    )
}

export default wasteItemList