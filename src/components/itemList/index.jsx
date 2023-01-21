import React from "react"
import "./styles.css"

export const ListItem = ({title, description, htmlUrl}) => {
    return (
        <div className="item-list">
        <strong><a href={htmlUrl}>{title}</a></strong>
        <p>{description}</p>
        <hr />
        </div>
    )
}