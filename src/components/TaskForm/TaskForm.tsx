import React, { useState, useEffect, useRef } from "react";
import styles from "./TaskForm.module.scss";
import { useAppDispatch } from "../../hooks";
import { addTodo } from "../../store/tasksSlice";

const TaskForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [value, setValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && value.trim() !== "") {
            dispatch(addTodo(value.trim()));
            setValue("");
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input
            type="text"
            className={styles.todo_input}
            placeholder="What needs to be done?"
            value={value}
            ref={inputRef}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
        />
    );
};

export default TaskForm;
