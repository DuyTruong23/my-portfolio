import {
  tabs,
  socials,
  information,
  skills,
  frameworks,
  experiences,
  softSkills,
  contact,
} from './constant.js';

const $ = document.querySelector.bind(document);

const renderTabs = () => {
  const navElement = $('#nav');
  navElement.innerHTML = tabs
    .map(
      (item) => `
    <li key=${item.id}>
      <a href=${item.href} class=${item.class}>
        ${item.icon} <span>${item.text}</span>
      </a>
    </li>
  `
    )
    .join('');
};

const renderSocials = () => {
  const socialElement = $('#social');
  socialElement.innerHTML = socials
    .map(
      (item, index) => `
    <a href=${item.url} key=${index} class=${item.class}>
      ${item.buttonIcon}
    </a>
  `
    )
    .join('');
};

const renderInformation = () => {
  const informationElement = $('#information');
  informationElement.innerHTML = information
    .map(
      (item, index) => `
    <li key=${index}>
      <i class="bi bi-chevron-right"></i>
      <strong>${item.title}:</strong>
      ${
        item.tag
          ? `<a href=${item.tag}><span>${item.description}</span></a>`
          : `<span>${item.description}</span>`
      }
    </li>
  `
    )
    .join('');
};

const renderSkills = () => {
  const skillElement = $('#skill');
  skillElement.innerHTML = skills
    .map(
      (item, index) => `
    <tr key=${index}>
      <th scope='row'>${item.id}</th>
      <td>${item.title}</td>
      <td>${item.year}</td>
      <td>${item.month}</td>
    </tr>
  `
    )
    .join('');
};

const renderSoftSkills1 = () => {
  const softSkillElement = $('#soft-skill1');
  softSkillElement.innerHTML = softSkills
    .slice(0, 4)
    .map(
      (item) => `
    <div class="progress" key=${item.id}>
      <span class="skill">${item.title}<i class="val">${item.description}</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar" aria-valuenow=${item.valueNow} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  `
    )
    .join('');
};
const renderSoftSkills2 = () => {
  const softSkillElement = $('#soft-skill2');
  softSkillElement.innerHTML = softSkills
    .slice(4)
    .map(
      (item) => `
    <div class="progress" key=${item.id}>
      <span class="skill">${item.title}<i class="val">${item.description}</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar" aria-valuenow=${item.valueNow} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  `
    )
    .join('');
};

const renderExperiences = () => {
  const experiencesElement = $('#experiences');

  // Sort experiences by the end date
  experiences.sort((a, b) => {
    // Convert end dates to Date objects for comparison
    const dateA = getDateFromEnd(a.end);
    const dateB = getDateFromEnd(b.end);
    return dateB - dateA; // Sort in descending order based on end date
  });

  experiencesElement.innerHTML = experiences
    .map(
      (item, index) => `
    <div key=${index} class="col-lg-6">
      <h3 class="resume-title">${item.company}</h3>
      <div class="resume-item">
        <h4>${item.domain}</h4>
        <h5>${item.start} - ${item.end ? item.end : 'Present'}</h5>
        <p><em>${item.address}</em></p>
        ${
          item.description
            ? `
            <p>Roll: ${item.roll}</p>
          <p>Position: ${item.position}</p>
          <ul>${item.description.map((des) => `<li>${des}</li>`).join('')}</ul>
        `
            : `
            <p>${item.roll}</p>
          <p>${item.position}</p>
        `
        }
      </div>
    </div>
  `
    )
    .join('');
};

const getDateFromEnd = (endDateString) => {
  if (!endDateString) return new Date('9999-12-31');
  const [month, year] = endDateString.split('/');
  return new Date(parseInt(year), parseInt(month) - 1);
};

const renderFrameworks = () => {
  const frameworkElement = $('#framework');
  frameworkElement.innerHTML = frameworks
    .map(
      (item, index) => `
    <tr key=${index}>
      <th scope='row'>${item.id}</th>
      <td>${item.title}</td>
      <td>${item.year}</td>
      <td>${item.month}</td>
    </tr>
  `
    )
    .join('');
};

const renderContact = () => {
  const contactElement = $('#contact-info');
  contactElement.innerHTML = contact
    .map(
      (item, index) => `
    <div key=${index} class=${item.class}>
      ${
        item.tag
          ? `<a href=${item.tag}><i class=${item.buttonIcon}></i></a>`
          : `<i class=${item.buttonIcon}></i>`
      }
      <h4>${item.title}:</h4>
      <p>${item.description}</p>
    </div>
  `
    )
    .join('');
};

// Call rendering functions
renderTabs();
renderSocials();
renderInformation();
renderSkills();
renderSoftSkills1();
renderSoftSkills2();
renderExperiences();
renderFrameworks();
renderContact();
