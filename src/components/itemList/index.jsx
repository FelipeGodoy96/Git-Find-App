import React from "react"
import "./styles.css"

export const ListItem = ({title, description}) => {
    return (
        <div className="item-list">
        <strong>{title}</strong>
        <p>{description}</p>
        <hr />
        </div>
    )
}