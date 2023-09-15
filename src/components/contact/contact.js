import './contact.css';

const main = document.querySelector('main');

const initiateContact = function initiateContact() {
  main.innerHTML = `  
  <div class="title-container">
    <h2 class="backline"><span>Contact</span></h2>
  </div>`;
};

export default initiateContact;
