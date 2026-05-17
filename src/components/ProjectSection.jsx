function ProjectSection({ title, description }) {
  return (
  <section>
    <h2 className="mot-hover">{title}</h2>
    <p>{description}</p>
  </section>
  );
}

export default ProjectSection;