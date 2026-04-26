import React, { useOptimistic, useState } from 'react'

const App = () => {

    const [todos, setTodos] = useState([]);

    const [optimisticTodos, setOptimisticTodo] = useOptimistic(
        todos,
        (oddTodos, newTodo) => [...oddTodos, { text: newTodo, pending: true }]
    );

    const handleAddTodo = async (formData) => {
        const newTodo = formData.get("todo");
        setOptimisticTodo(newTodo);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setTodos((currentTodos) => [
            ...currentTodos,
            { text: newTodo, pending: false },
        ]);
    };

    return (
        <div>
            <form action={handleAddTodo}>
                <input type="text" name="todo" placeholder="Enter Todo...." />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {optimisticTodos.map((todo, index) => (
                    <li key={index}>
                        {todo.text}
                        {todo.pending && <span>(Adding...)</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
