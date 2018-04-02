import React from 'react'

const List = (props) => {
    return (
    <ul> 
        {props.items.map(item => {
            return <li>{item.text}</li>
          })}
    </ul>
    )
}

export default List