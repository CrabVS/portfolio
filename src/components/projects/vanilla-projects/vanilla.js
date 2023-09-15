import './vanila.css';
import createProject from '../projects';

const projectsContainer = document.querySelector('.projects-container');

const initiateVanilla = function initiateVanilla() {
  projectsContainer.appendChild(createProject());
};

export default initiateVanilla;
