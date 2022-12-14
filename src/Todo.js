import React from 'react'
import { ACTIONS } from './App.js'

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
        {todo.name}
        </span>
        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO})}>Toggle</button>
        <button>Delete</button>
    </div>
  )
}

