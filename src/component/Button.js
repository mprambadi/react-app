import React from 'react'

const Button = (props) => {
    return <button className={props.style}> {props.text} </button>
}

export default Button