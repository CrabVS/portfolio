import './angular.css';
import createProject from '../projects';

const main = document.querySelector('main');

const createPage = function createPage() {
  main.innerHTML = `
  <div class="title-container">
    <h2 class="backline"><span>Angular Projects</span></h2>
  </div>  
  <section class="projects-container">
  </section>`;
};

const initiateAngular = function initiateAngular() {
  createPage();
  const projectsContainer = document.querySelector('.projects-container');
  projectsContainer.appendChild(createProject());
};

export default initiateAngular;
