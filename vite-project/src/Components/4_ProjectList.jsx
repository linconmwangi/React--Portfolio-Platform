// Import the individual ProjectItem component
import ProjectItem from './5_ProjectItem.jsx';

// ProjectList Component: Renders a list of ProjectItems
function ProjectList({ projects }) {
  
  // If there are no projects, show a message
  if (projects.length === 0) {
    return (
      <section className="list">
        <p>No projects found</p>
      </section>
    );
  }

  // Otherwise, map through the projects array and render a ProjectItem for each
  return (
    <section className="list">
      {projects.map(p => (
        // Use project.id as the unique key for React
        <ProjectItem key={p.id} project={p} />
      ))}
    </section>
  );
}

export default ProjectList;