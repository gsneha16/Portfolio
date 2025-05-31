import React from "react";
import "./main.css";

const services = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end development with MERN stack – from frontend to backend with database integration.",
  },
  {
    title: "Frontend Development",
    description:
      "Responsive, clean UI with React, HTML5, CSS3, and JavaScript.",
  },
  {
    title: "Backend & API",
    description:
      "Secure APIs using Node.js, Express.js, and integrated database logic.",
  },
  {
    title: "Database Management",
    description: "Design and optimize MongoDB, MySQL databases.",
  },
  {
    title: "Deployment",
    description:
      "Hosting and deployment on Vercel, AWS with GitHub integration.",
  },
];

const Services = () => {
  return (
    <div className="outer-container">
      {" "}
      <div className="timeline">
        <h2 className="gradient-text-lg heading">My Services</h2>
        {services.map((service, index) => (
          <div
            className={`container ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="content">
              <h3 className="gradient-text-sm">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
