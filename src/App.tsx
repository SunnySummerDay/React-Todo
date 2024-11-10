import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.name) {
      case "task":
        setTask(event.target.value);

        break;
      case "deadline":
        setDeadline(Number(event.target.value));

        break;
    }
  };

  const addTask = (): void => {
    const newTask = { name: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskName: string) => {
    setTodoList(
      todoList.filter((task) => {
        return task.name !== taskName;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter a Task:"
            value={task}
            name="task"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in days):"
            value={deadline}
            name="deadline"
            onChange={handleChange}
          />
        </div>

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask task={task} complete={completeTask} key={key} />;
        })}
      </div>
    </div>
  );
};

export default App;
