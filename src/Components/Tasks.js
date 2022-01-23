import { Task } from "./Task";

export const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((oneItem) => (
        <Task key={oneItem.id} task={oneItem}/>
      ))}
    </>
  );
};
