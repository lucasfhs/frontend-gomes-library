import { Smartphone } from "lucide-react";
function Tasks(props) {
  console.log(props);
  return (
    <div>
      <h1 className="p-2 bg-red-600">Sou um task</h1>
      <div>
        {props.tasks.map((task) => (
          <p
            key={task.id}
            className="text-center text-stone-200 mt-2 p-2 border"
          >
            {task.title}
          </p>
        ))}
      </div>
      <Smartphone className="w-full" />
    </div>
  );
}
export default Tasks;
