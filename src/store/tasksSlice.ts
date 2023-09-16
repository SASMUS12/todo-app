import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: number;
    text: string;
}

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ text: string }>) => {
            const newTask: Task = {
                id: Date.now(),
                text: action.payload.text,
            };
            state.tasks.push(newTask);
        },
    },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;