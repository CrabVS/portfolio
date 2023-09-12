import './header.css';

const links = Array.from(document.querySelectorAll('nav a'));
const selector = document.querySelector('nav .selector');
const nav = document.querySelector('nav');

const getActiveLink = function getActiveLink() {
  return document.querySelector('nav a.active');
};

const getActiveWidth = function getActiveWidth() {
  return getActiveLink().getBoundingClientRect().width;
};

const getSelectorLeftPos = function getSelectorLeftPosition() {
  return getActiveLink().getBoundingClientRect().left - nav.getBoundingClientRect().left;
};

const removeActiveClass = function removeActiveClass() {
  links.forEach((link) => {
    link.classList.remove('active');
  });
};

const updateSelector = function updateSelector() {
  selector.style.left = `${getSelectorLeftPos()}px`;
  selector.style.width = `${getActiveWidth()}px`;
};

const addNavListeners = function addNavListeners() {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      removeActiveClass();
      link.classList.add('active');
      updateSelector();
    });
  });
};

const initiateHeader = function initiateHeader() {
  addNavListeners();
  updateSelector();
};

export default initiateHeader;
