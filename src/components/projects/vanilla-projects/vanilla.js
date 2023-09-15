import './vanila.css';
import createProject from '../projects';

const main = document.querySelector('main');

const createPage = function createPage() {
  main.innerHTML = `
  <section class="projects-container">
  </section>`;
};

const initiateVanilla = function initiateVanilla() {
  createPage();
  const projectsContainer = document.querySelector('.projects-container');
  projectsContainer.appendChild(createProject());
};

export default initiateVanilla;
