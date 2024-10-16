import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 
  const [editIndex, setEditIndex] = useState(null); 

  
  const addTodo = () => {
    if (inputValue) {
      const newTodo = { id: Date.now(), text: inputValue };
      setTodos([...todos, newTodo]); 
      setInputValue(''); 
    }
  };

  
  const displayTodos = () => {
    return todos.map((todo, index) => (
      <li key={todo.id}>
        {todo.text}
        <button id='btn1' onClick={() => editTodo(index)}>Edit</button>
        <button id='btn2' onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    ));
  };

 
  const editTodo = (index) => {
    setInputValue(todos[index].text); 
    setEditIndex(index); 
  };


  const saveTodo = () => {
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? { ...todo, text: inputValue } : todo
      );
      setTodos(updatedTodos);
      setInputValue(''); 
      setEditIndex(null); 
    } else {
      addTodo(); 
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); 
  };

  return (
    <div id="container">
      <h1>TODO LIST</h1>
      <input id='input'
        type="text"
        value={inputValue}
        placeholder='Add item...'
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button id='btn' onClick={saveTodo}>{editIndex !== null ? 'Save' : 'Add'} Todo</button>
      <ul id='lis'>
        {displayTodos()} 
      </ul>
    </div>
  );
};

export default TodoApp;