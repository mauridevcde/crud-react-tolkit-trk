import { useGetTasksQuery, useDeleteTaskMutation, useUpdateTaskMutation } from "../api/apiSlice";

export const TaskList = () => {
  const { data: task, isError, isLoading, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  console.log(task);
  return (
    <>
      <ul>
        {task.map((task) => (
          <li key={task.id}>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <button
              onClick={() => {
                deleteTask(task.id);
              }}
            >
              delete
            </button>
            <input type="checkbox" id={task.id} 
                onChange={(e) => {
                    updateTask({
                        ...task,
                        completed: e.target.checked
                    })
                }}
                checked={task.completed}
            />
            <label htmlFor="" id={task.id}>
              completed
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
