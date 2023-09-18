import React from "react";
import styles from "./App.module.scss";
import TaskForm from "../src/components/TaskForm/TaskForm";
import TaskList from "../src/components/TaskList/TaskList";
import TodoFooter from "../src/components/TaskFooter/TaskFooter";
import {
    useAppSelector,
    useAppDispatch,
} from "./hooks";
import {
    showActive,
    showCompleted,
    clearCompleted,
    showAll,
} from "./store/tasksSlice";

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const { todos, currentList } = useAppSelector((state) => state.todo);

    const activeItems = todos.filter((todo) => !todo.completed);

    return (
        <>
            <header className={styles.header__title}>todos</header>
            <div className={styles.content_wrapper}>
                <TaskForm />
                <TaskList todos={currentList} />
                {todos.length !== 0 && (
                    <TodoFooter
                        itemsCount={activeItems.length}
                        showAll={() => dispatch(showAll())}
                        showActive={() => dispatch(showActive())}
                        showCompleted={() => dispatch(showCompleted())}
                        clearCompleted={() => dispatch(clearCompleted())}
                    />
                )}
            </div>
        </>
    );
};

export default App;
