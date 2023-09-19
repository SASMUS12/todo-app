import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import TaskForm from "../components/TaskForm/TaskForm";

test("Input renders without crashing and contains placeholder which has focus on mount", () => {
    render(
        <Provider store={store}>
            <TaskForm />
        </Provider>
    );
    const inputField = screen.getByPlaceholderText("What needs to be done?");
    expect(inputField).toHaveFocus();
});