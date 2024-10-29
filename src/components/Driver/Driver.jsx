import React, { useState } from 'react'

const Driver = () => {
  const [todo, setTodo] = useState('');

  function updateTodo(todo) {
    todo++
  }

  return (
    <div>
      <button onClick={updateTodo}>Add</button>
      <h1>{todo}</h1>
    </div>
  )
}

export default Driver
