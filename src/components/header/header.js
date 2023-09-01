import './header.css';

const initiateHeader = function initiateHeader() {
  const open = document.querySelector('.open');
  const close = document.querySelector('.close');
  const container = document.querySelector('.container');

  open.addEventListener('click', () => {
    container.classList.add('show-nav');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  close.addEventListener('click', () => {
    container.classList.remove('show-nav');
  });
};

export default initiateHeader;
