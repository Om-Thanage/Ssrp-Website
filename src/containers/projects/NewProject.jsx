import React from 'react';
import Projects from './ProjectsDetails';
import './NewProject.css';
import { useNavigate } from 'react-router-dom';

function NewProject() {

    const navigate = useNavigate();
    const handleprojectClick = (id) => {
        navigate(`/project/${id}`);
    }
  return (
    <>
      <div className="project-heading">
        <div >Orbital Endeavors</div></div>
      <div className="project-container">
        {Projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={`/assets/images/project_images/${project.src}`} alt={project.title} className="project-image" />
            <div className="project-title" >{project.title}</div>
            <div className="project-author" >{project.author}</div>
            <button className="project-button" onClick={()=> handleprojectClick(project.id)} >Learn More</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default NewProject;
