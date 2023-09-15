import './angular.css';
import createProject from '../projects';

const main = document.querySelector('main');

const createPage = function createPage() {
  main.innerHTML = `
  <section class="projects-container">
  </section>`;
};

const initiateAngular = function initiateAngular() {
  createPage();
  const projectsContainer = document.querySelector('.projects-container');
  projectsContainer.appendChild(createProject());
};

export default initiateAngular;
