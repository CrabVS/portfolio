import './header.css';
import { initiateSkills, clearAllTimeouts } from '../skills/skills';
import initiateVanilla from '../projects/vanilla-projects/vanilla';
import initiateAngular from '../projects/angular-projects/angular';
import initiateHome from '../home/home';

const links = Array.from(document.querySelectorAll('nav a'));
const selector = document.querySelector('nav .selector');
const nav = document.querySelector('nav');

let lastLink = 'Home';

const updatePage = function updateToNewPage(link) {
  if (lastLink === 'Skills') clearAllTimeouts();

  lastLink = link;
  switch (link) {
    case 'Home':
      initiateHome();
      break;
    case 'Skills':
      initiateSkills();
      break;
    case 'Vanilla':
      initiateVanilla();
      break;
    case 'Angular':
      initiateAngular();
      break;
    default:
      break;
  }
};

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
      updatePage(link.textContent);
    });
  });
};

const initiateHeader = function initiateHeader() {
  addNavListeners();
  updateSelector();
};

export default initiateHeader;
