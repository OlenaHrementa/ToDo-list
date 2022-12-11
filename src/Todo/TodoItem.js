import React, {useContext} from "react";
import PropTypes from 'prop-types'
import Context from "../context";
import s from './TodoItem.module.css'

function TodoItem({ todo, index, onChange }) {
    const {removeTodo} = useContext(Context)
    const classes =[]

    if (todo.completed) {
        classes.push('done')
    }

    return (
    <li className={s.flexItem}>
    <span className={`${s.lightColor} ${classes.join(' ')}`}>
            <input 
            type='checkbox' 
            checked={todo.completed}
            className={s.input} 
            onChange={() => onChange(todo.id)}
            />
            <strong className={s.lightColor}>{index + 1}</strong>
            &nbsp;
            {todo.title}
        </span>

        <button className={s.btn} onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
    )
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default TodoItem 