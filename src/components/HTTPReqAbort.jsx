import axios from 'axios';
import { useEffect, useState } from 'react';

export const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible((prevState) => !prevState)}>
        {isVisible ? 'Unmount' : 'Mount'}
      </button>
      {isVisible && <ChildComponent />}
    </div>
  );
};

// https://jsonplaceholder.typicode.com/todos

const ChildComponent = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h2>ChildComponent</h2>
      {todos.length > 0 && (
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>{todo.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};
