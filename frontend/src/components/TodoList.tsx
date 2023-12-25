import React from 'react';
import TodoItem from './TodoItem';

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;