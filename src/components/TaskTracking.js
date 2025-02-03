const TaskTracking = () => {
    const tasks = [
      { name: "Task 1", description: "Design UI", deadline: "2024-01-20", status: "In Progress" },
      { name: "Task 2", description: "Develop Backend", deadline: "2024-02-10", status: "Pending" },
      { name: "Task 3", description: "Integrate APIs", deadline: "2024-02-25", status: "Completed" },
    ];
  
    return (
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Task Tracking</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Task Name</th>
              <th className="p-2">Description</th>
              <th className="p-2">Deadline</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{task.name}</td>
                <td className="p-2">{task.description}</td>
                <td className="p-2">{task.deadline}</td>
                <td className="p-2 text-blue-600">{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TaskTracking;
  