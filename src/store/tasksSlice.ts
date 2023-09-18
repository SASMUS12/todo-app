import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    activeTodos: Todo[];
    completedTodos: Todo[];
    currentList: Todo[];
}

const initialState: TodoState = {
    todos: [],
    activeTodos: [],
    completedTodos: [],
    currentList: [],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: uuid(),
                text: action.payload,
                completed: false,
            };
            state.todos.push(newTodo);
            state.activeTodos.push(newTodo);
            state.currentList = state.todos;
        },
        setCompleted: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                const source = todo.completed ? state.activeTodos : state.completedTodos;
                const target = todo.completed ? state.completedTodos : state.activeTodos;
                source.splice(source.indexOf(todo), 1);
                target.push(todo);
            }
            state.currentList = state.todos;
        },
        showAll: (state) => {
            state.currentList = state.todos;
        },
        showActive: (state) => {
            state.currentList = state.activeTodos;
        },
        showCompleted: (state) => {
            state.currentList = state.completedTodos;
        },
        clearCompleted: (state) => {
            state.completedTodos.length = 0;
            state.todos.forEach((todo) => {
                todo.completed = false;
            });
            state.activeTodos = [...state.todos];
            state.currentList = state.todos;
        },
    },
});

export const {
    addTodo,
    setCompleted,
    showAll,
    showActive,
    showCompleted,
    clearCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;