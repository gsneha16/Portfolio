import "./main.css";

const projects = [
  {
    title: "VeggieVibe",
    image: "/VeggieVibe-1.png",
    description:
      "A full-stack MERN application for food enthusiasts, featuring a user-friendly interface and robust backend.",
    tech: "MERN",
    live: "https://veggie-vibe-ui.vercel.app/",
    code: "https://github.com/gsneha16/Veggie-Vibe-MERN-PROJECT",
  },
  {
    title: "PrivaCoder",
    image: "/PrivaCoder-1.png",
    description:
      "Responsive, clean UI with React, HTML5, CSS3, and JavaScript.",
    tech: "MERN",
    live: "https://priva-coder-ui.vercel.app/",
    code: "https://github.com/gsneha16/privaCoder",
  },
  {
    title: "Resume Builder",
    image: "/resumeBuilder.png",
    description:
      "A user-friendly resume builder that allows users to create and download resumes in PDF format.",
    tech: "HTML, CSS, JavaScript",
    live: "https://resume-builder-eta-plum.vercel.app/",
    code: "https://github.com/gsneha16/Resume-Builder",
  },
];

const ProjectCard = () => {
  return (
    <div className="outer-container">
      <h1 className="heading gradient-text-lg">Projects</h1>
      <div className="project flex-center">
        {projects.map((project, index) => {
          return (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="gradient-text-sm">{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Tech Stack: {project.tech}</strong> 
                </p>
                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
