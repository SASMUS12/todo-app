import React from "react";
import check from "../../images/check.svg";
import circle from "../../images/circle.svg";
import { useAppDispatch } from "../../hooks";
import { setCompleted } from "../../store/tasksSlice";
import styles from "./TaskItem.module.scss";

interface TaskItemProps {
    id: string;
    text: string;
    completed: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text, completed}) => {
    const dispatch = useAppDispatch();

    const iconSrc = completed ? check : circle;
    const itemClassName = completed ? styles.task_item__completed : styles.task_item__text;


    return (
        <div className={styles.task_item}>
            <img
                src={iconSrc}
                alt=""
                className={styles.task_item__icon}
                onClick={() => {
                    dispatch(setCompleted(id));
                }}
            />
            <span className={itemClassName}>{text}</span>
        </div>
    );
};

export default TaskItem;