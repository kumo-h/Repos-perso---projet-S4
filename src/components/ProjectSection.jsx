function ProjectSection({ title, description, color }) {
  return (
  <section>
    <h2 style={{ color: color }}>{title}</h2>
    <p style={{borderLeftColor : color}}>{description}</p>
  </section>
  );
}

export default ProjectSection;