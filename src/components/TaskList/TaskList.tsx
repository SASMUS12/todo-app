import React from 'react';
import styles from './TaskList.module.css'
import {useSelector} from "react-redux";
import { RootState } from "../../store/store";


const TaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
  return (
      <div>
          <h2 className={styles.title}>todos</h2>
          <ul className={styles.items}>
              {tasks.map((task) => (
                  <li className={styles.item} key={task.id}>{task.text}</li>
              ))}
          </ul>
      </div>
  )
}

export default TaskList;