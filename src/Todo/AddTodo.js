import React, { useState } from "react"
import PropTyes from 'prop-types'
import s from './AddTodo.module.css'

function AddTodo({onCreate}) {
    const[value,setValue] = useState('')

    function submitHandler(event){
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }
    return (
        <form onSubmit={submitHandler}> 
            <input value={value} onChange={event => setValue(event.target.value)} className={s.addInput} />
            <button type='submit' className={s.btn}>Add Todo</button>
        </form>
    )
}

AddTodo.propTyes ={
  onCreate: PropTyes.func.isRequired
}

export default AddTodo