import { useCreateTaskMutation } from "../api/apiSlice";

export const TaskForm = () => {
  const [createTask] = useCreateTaskMutation();
 

  const handleSubmit = (e) => {
    e.preventDefault();

    let name = e.target.elements.name.value.trim();
    let description = e.target.elements.description.value.trim();
    let completed = e.target.elements.completed.checked;

    console.log(name, description, completed);
    createTask({ name, description, completed });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="text" name="description" />
        <input type="checkbox" name="completed" />
        <button>Add Task</button>
      </form>
    </>
  );
};
