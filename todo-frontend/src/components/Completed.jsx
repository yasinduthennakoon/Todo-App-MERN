import React from 'react';
import Todo from '../components/Todo';
// Returns completed todos
export default function Completed({ todos, setTodos }) {
  return todos
    .filter((todo) => todo.isCompleted === true)
    .map((todo) => <Todo todo={todo} todos={todos} setTodos={setTodos} />);
}
