const ProjectOverview = () => {
    const projects = [
      { name: "Project Alpha", startDate: "2024-01-01", endDate: "2024-06-30", status: "In Progress" },
      { name: "Project Beta", startDate: "2024-02-01", endDate: "2024-07-15", status: "Completed" },
      { name: "Project Gamma", startDate: "2024-03-01", endDate: "2024-09-10", status: "Pending" },
    ];
  
    return (
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p>Start Date: {project.startDate}</p>
              <p>End Date: {project.endDate}</p>
              <p>Status: <span className={`text-${project.status === "Completed" ? "green" : "blue"}-600`}>{project.status}</span></p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProjectOverview;
  