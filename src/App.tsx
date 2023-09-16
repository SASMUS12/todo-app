import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import TaskFrom from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";


const App: React.FC = () => {
  return (
      <Provider store={store}>
          <div className='App'>
              <h1 className='title'>todos</h1>
              <TaskFrom />
              <TaskList />
          </div>
      </Provider>

  );
}

export default App;
