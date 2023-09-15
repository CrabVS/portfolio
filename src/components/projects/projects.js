import './projects.css';

const createProject = function createProject() {
  const projectEl = document.createElement('div');
  projectEl.classList.add('project');
  projectEl.innerHTML = `
  <div class="img-container"></div>
  <div class="info-container">
      <h4 class="project-title">Title</h4>
      <p class="project-description">Description</p>
      <div class="buttons-container">
          <a href="#" attribute rel="noopener noreferrer" target="_blank"><button class="btn">View Code</button></a>
          <a href="#" attribute rel="noopener noreferrer" target="_blank"><button class="btn">Live Preview</button></a>
      </div>
  </div>`;

  return projectEl;
};

export default createProject;
