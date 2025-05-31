import "./main.css";

const projects = [
  {
    title: "VeggieVibe",
    image: "/VeggieVibe-1.png",
    description:
      "A full-stack MERN application for food enthusiasts, featuring a user-friendly interface and robust backend.",
    tech: "MERN",
    live: "",
    code: "",
  },
  {
    title: "PrivaCoder",
    image: "/PrivaCoder-1.png",
    description:
      "Responsive, clean UI with React, HTML5, CSS3, and JavaScript.",
    tech: "MERN",
    live: "https://priva-coder-ui.vercel.app/",
    code: "",
  },
  {
    title: "WebPlayer",
    image: "/webplayer.png",
    description:
      "Secure APIs using Node.js, Express.js, and integrated database logic.",
    tech: "",
    live: "",
    code: "",
  },
];

const ProjectCard = ({ title, image, description, tech, live, code }) => {
  return (
    <div className="outer-container">
      <h1 className="heading gradient-text-lg">Projects</h1>
      <div className="project flex-center">
        {projects.map((project, index) => {
          return (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Tech Stack: {project.tech}</strong> 
                </p>
                <div className="project-links">
                  <a
                    href="https://veggie-vibe-ui.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/gsneha16/Veggie-Vibe-MERN-PROJECT"
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
