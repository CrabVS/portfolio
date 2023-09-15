import './skills.css';
import packageIcon from '../../res/package-variant.svg';
import htmlIcon from '../../res/icons8-html5.svg';
import cssIcon from '../../res/icons8-css3.svg';
import jsIcon from '../../res/icons8-javascript.svg';
import tsIcon from '../../res/icons8-typescript.svg';
import angularIcon from '../../res/icons8-angular.svg';
import gitIcon from '../../res/icons8-git.svg';
import npmIcon from '../../res/icons8-npm.svg';
import webpackIcon from '../../res/icons8-webpack.svg';

const timeouts = [];
const iconsImgs = [
  { url: htmlIcon, name: 'Hypertext Markup Language' },
  { url: cssIcon, name: 'Cascading Style Sheets' },
  { url: jsIcon, name: 'JavaScript' },
  { url: tsIcon, name: 'TypeScript' },
  { url: angularIcon, name: 'Angular' },
  { url: npmIcon, name: 'Node Package Manager' },
  { url: webpackIcon, name: 'Webpack' },
  { url: gitIcon, name: 'Git' }];

let skillIcons;
let skillsContainer;
let headIcon;

const updateSkillIconsContainer = function updateSkillIconsContainer() {
  const skillIcon = document.querySelector('.head-icon .skill-icon');
  if (skillIcon === null) {
    const headContainer = document.querySelector('.head-container');
    headIcon.style.height = '0px';
    headContainer.style.height = '0px';
    timeouts.push(setTimeout(() => {
      headContainer.remove();
    }, 1000));
  }
};

const getSkillCards = function getSkillCards() {
  const skillCards = Array.from(document.querySelectorAll('.skills-container .skill-card'));

  return skillCards;
};

const createNewCard = function createNewCard(index) {
  const card = document.createElement('div');
  card.classList.add('skill-card');

  card.innerHTML = `
    <div class="skill-card-inner">
      <div class="skill-card-front">
        <img src="${iconsImgs[index].url}" class="skill-card-img">
      </div>
      <div class="skill-card-back"><h4>${iconsImgs[index].name}</h4></div>
    </div>
  `;

  skillsContainer.appendChild(card);
};

const moveIcon = function moveIconToCard(index, skillCards) {
  const headLeft = headIcon.getClientRects()[0].left;
  const headTop = headIcon.getClientRects()[0].top;

  const lastCard = skillCards[skillCards.length - 1];
  const cardTopPos = lastCard.getClientRects()[0].top;
  const cardLeftPos = lastCard.getClientRects()[0].left;
  const cardWidth = lastCard.getClientRects()[0].width;

  const nextTopPos = cardTopPos - headTop;
  const nextLeftPos = cardLeftPos - headLeft;
  skillIcons[index].style.top = `${nextTopPos}px`;
  skillIcons[index].style.left = `${nextLeftPos + cardWidth / 2}px`;
  skillIcons[index].style.opacity = 0;

  timeouts.push(setTimeout(() => {
    lastCard.style.opacity = 1;
  }, 200));

  timeouts.push(setTimeout(() => {
    skillIcons[index].remove();
    updateSkillIconsContainer();
  }, 800));
};

const revealIcon = function revealIconFromHead(index) {
  skillIcons[index].style.opacity = 1;
  skillIcons[index].style['z-index'] = 1;

  let switchValue = index;

  if (index > 7) {
    switchValue = index % 8;
  }

  switch (switchValue) {
    case 0:
      skillIcons[index].style.top = '-50%';
      break;
    case 1:
      skillIcons[index].style.top = '-50%';
      skillIcons[index].style.left = '150%';
      break;
    case 2:
      skillIcons[index].style.left = '150%';
      break;
    case 3:
      skillIcons[index].style.left = '150%';
      skillIcons[index].style.top = '150%';
      break;
    case 4:
      skillIcons[index].style.top = '150%';
      break;
    case 5:
      skillIcons[index].style.left = '-50%';
      skillIcons[index].style.top = '150%';
      break;
    case 6:
      skillIcons[index].style.left = '-50%';
      break;
    case 7:
      skillIcons[index].style.left = '-50%';
      skillIcons[index].style.top = '-50%';
      break;
    default:
      break;
  }

  timeouts.push(setTimeout(() => {
    createNewCard(index);
    const skillCards = getSkillCards();
    moveIcon(index, skillCards);
  }, 1000));
};

const createSkillIcons = function createSkillIcons() {
  for (let i = 0; i < iconsImgs.length; i += 1) {
    const newIcon = document.createElement('div');
    newIcon.classList.add('skill-icon');
    headIcon.appendChild(newIcon);
  }

  skillIcons = Array.from(document.querySelectorAll('.head-icon .skill-icon'));
};

const createPage = function createPage() {
  const main = document.querySelector('main');
  main.innerHTML = `
  <div class="title-container">
    <h2 class="backline"><span>Skills</span></h2>
  </div>
  <div class="skills-page-container">
    <div class="head-container">
        <div class="head-icon">
        </div>
    </div>
    <div class="skills-container">
    </div>
  </div>`;
};

const clearAllTimeouts = function clearAllTimeouts() {
  timeouts.forEach((timeout, i) => {
    clearTimeout(timeouts[i]);
  });
};

const initiateSkills = function initiateSkills() {
  createPage();
  headIcon = document.querySelector('.head-container .head-icon');
  createSkillIcons();
  skillsContainer = document.querySelector('.skills-container');
  headIcon.style.backgroundImage = `url('${packageIcon}')`;

  skillIcons.forEach((i, index) => {
    const icon = i;
    icon.style.backgroundImage = `url('${iconsImgs[index].url}')`;
    timeouts.push(setTimeout(() => {
      revealIcon(index);
    }, 300 * (index + 1)));
  });
};

export { initiateSkills, clearAllTimeouts };
