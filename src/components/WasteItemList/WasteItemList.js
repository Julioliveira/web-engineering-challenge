import React from 'react'
import WasteItem from './WasteItem/WasteItem'
import classes from './WasteItemList.css'

const wasteItemList = (props) => {
    let items = props.list.map((item, index) => {
        return <WasteItem key={item.id ? item.id : index} item={item} click={() => props.favoriteHandler(item.id)} />
    })
    let title = null
    if (props.title)
        title = <div className={classes.Title}>{props.title}</div>

    return (
        <div className={classes.WasteItemList}>
            {title}
            {items}
        </div>
    )
}

export default wasteItemList