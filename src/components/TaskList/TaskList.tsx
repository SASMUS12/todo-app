import React from 'react';
import TaskItem from "../TaskItem/TaskItem";

interface Task {
    id: string;
    text: string;
    completed: boolean;
}

interface TaskListProps {
    todos: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ todos }) => (
    <>
        {todos.map(({ id, text, completed }) => (
            <TaskItem
                key={id}
                id={id}
                text={text}
                completed={completed}
            />
        ))}
    </>
);

export default TaskList;
