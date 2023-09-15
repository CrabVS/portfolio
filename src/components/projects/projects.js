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
          <button class="btn">View Code</button>
          <button class="btn">Live Preview</button>
      </div>
  </div>`;

  return projectEl;
};

export default createProject;
