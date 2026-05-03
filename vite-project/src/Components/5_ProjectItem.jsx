// ProjectItem Component: Displays a single project card
function ProjectItem({ project }) {
  return (
    <article className="item">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  );
}

export default ProjectItem;