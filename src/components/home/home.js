import './home.css';

const main = document.querySelector('main');

const initiateHome = function initiateHome() {
  main.innerHTML = `
  <div class="title-container">
    <h2 class="backline"><span>About Me</span></h2>
  </div>`;
};

export default initiateHome;
