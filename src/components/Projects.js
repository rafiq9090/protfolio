import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Web Application</h3>
          <p>A simple web application using HTML, CSS, and JavaScript.</p>
        </div>
        <div className="project">
          <h3>Mobile App</h3>
          <p>A Flutter-based mobile app for task management.</p>
        </div>
        <div className="project">
          <h3>Java Application</h3>
          <p>A command-line tool for file organization written in Java.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
