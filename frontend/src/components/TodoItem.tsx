import React, { useState } from 'react';
import TodoEditForm from './TodoEditForm';

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing ? (
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      ) : (
        <TodoEditForm todo={todo} onEdit={handleEditCancel} />
      )}
    </div>
  );
};

export default TodoItem;