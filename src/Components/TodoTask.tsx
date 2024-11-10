import { ITask } from "../interfaces";

interface TodoTaskProps {
  task: ITask;
  complete(taskName: string): void;
}

const TodoTask = ({ task, complete }: TodoTaskProps) => {
  return (
    <div className="task">
      <div className="content">
        <span>Task: {task.name}</span>
        <span>Deadline: {task.deadline}</span>
      </div>
      <button
        onClick={() => {
          complete(task.name);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
