import './skills.css';
import packageIcon from '../../res/package-variant.svg';
import htmlIcon from '../../res/language-html5.svg';
import cssIcon from '../../res/language-css3.svg';
import jsIcon from '../../res/language-javascript.svg';
import angularIcon from '../../res/angularjs.svg';
import npmIcon from '../../res/npm.svg';
import webpackIcon from '../../res/webpack.svg';

const iconsImgs = [htmlIcon, cssIcon, jsIcon, angularIcon, npmIcon, webpackIcon];

const skillIcons = Array.from(document.querySelectorAll('.head-icon .skill-icon'));
const skillsContainer = document.querySelector('.skills-container');

const updateSkillIconsContainer = function updateSkillIconsContainer() {
  const skillIcon = document.querySelector('.head-icon .skill-icon');
  if (skillIcon === null) {
    const headContainer = document.querySelector('.head-container');
    const headIcon = document.querySelector('.head-icon');
    headIcon.style.height = '0px';
    headContainer.style.height = '0px';
    setTimeout(() => {
      headContainer.remove();
    }, 1000);
  }
};

const getSkillCards = function getSkillCards() {
  const skillCards = Array.from(document.querySelectorAll('.skills-container .skill-card'));

  return skillCards;
};

// const createNewCard = function createNewCard(index) {
//   const card = document.createElement('div');
//   card.classList.add('skill-card');

//   const cardImg = document.createElement('div');
//   cardImg.classList.add('skill-card-img');
//   card.appendChild(cardImg);
//   cardImg.style.backgroundImage = `url('${iconsImgs[index]}')`;

//   skillsContainer.appendChild(card);
// };

const createNewCard = function createNewCard(index) {
  const card = document.createElement('div');
  card.classList.add('skill-card');

  card.innerHTML = `
    <div class="skill-card-inner">
      <div class="skill-card-front">
        <img src="${iconsImgs[index]}" class="skill-card-img">
      </div>
      <div class="skill-card-back">Test</div>
    </div>
  `;

  skillsContainer.appendChild(card);
};

const moveIcon = function moveIconToCard(index, skillCards) {
  const headIcon = document.querySelector('.head-icon');
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

  setTimeout(() => {
    lastCard.style.opacity = 1;
  }, 200);

  setTimeout(() => {
    skillIcons[index].remove();
    updateSkillIconsContainer();
  }, 800);
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

  setTimeout(() => {
    createNewCard(index);
    const skillCards = getSkillCards();
    moveIcon(index, skillCards);
  }, 1000);
};

const initiateSkills = function initiateSkills() {
  const headIcon = document.querySelector('.head-container .head-icon');
  headIcon.style.backgroundImage = `url('${packageIcon}')`;

  skillIcons.forEach((i, index) => {
    const icon = i;
    icon.style.backgroundImage = `url('${iconsImgs[index]}')`;
    setTimeout(() => {
      revealIcon(index);
    }, 300 * (index + 1));
  });
};

export default initiateSkills;
