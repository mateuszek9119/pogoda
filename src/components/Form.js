import React from 'react'

const Form =(props)=>{

    return(
        <form>
            <input type="text" value = {props.value} placeholder = "wpisz nazwę " onChange={props.change} />
        </form>
    )
        
}

export default Form