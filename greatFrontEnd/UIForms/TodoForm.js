import "./styles.css";
import { useReducer } from "react";

const todosReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "addTodo": {
      const { todo } = action;
      return [...state, { value: todo, id: state.length + 1 }];
    }
    case "deleteTodo": {
      const { todoId } = action;
      const index = state.findIndex((x) => x.id === todoId);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length),
      ];
    }
    default: {
      return todos;
    }
  }
};

const initialtodos = [
  {
    id: 1,
    value: "Walk the dog",
  },
  {
    id: 2,
    value: "Water the plants",
  },
  {
    id: 3,
    value: "Wash the dishes",
  },
];

export default function App() {
  const [todos, dispatchTodos] = useReducer(todosReducer, initialtodos);

  const removeTodos = (todoId) => {
    dispatchTodos({
      type: "deleteTodo",
      todoId,
    });
  };

  const createTodos = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatchTodos({
      type: "addTodo",
      todo: formData.get("todo-text"),
    });
    // formData.set('todo-text', '')
    e.target.reset();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={createTodos}>
        <input
          type="text"
          required
          name="todo-text"
          placeholder="Add your task"
        />
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.value}</span>
            <button onClick={() => removeTodos(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
