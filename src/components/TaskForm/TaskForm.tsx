import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/tasksSlice";
import styles  from "./TaskForm.module.css";

const TaskFrom: React.FC = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (text.trim() !== '') {
            dispatch(addTask({ text }));
            setText('');
        }
    }
  return (
      <div>
          <h2 className={styles.title}>Добавить задачу:</h2>
          <input
              type="text"
              value={text}
              className={styles.todo}
              onChange={(e) => setText(e.target.value)}
              placeholder={'Введите новую задачу'}
          />
          <button className={styles.button} onClick={handleAddTask}>Добавить</button>
      </div>
  )
}

export default TaskFrom;