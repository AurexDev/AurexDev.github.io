import { introduction, canDo, cannotDo, jobs, contactLink } from './info.js';

const body = document.body;

const infoSection = document.createElement('section');
infoSection.id = 'info';

const intro = document.getElementById('hello');
if (intro) {
  intro.textContent = introduction;
  infoSection.appendChild(intro);
}

body.appendChild(infoSection);

const specsSection = document.createElement('section');
specsSection.id = 'specializations';

const canDoTitle = document.createElement('h2');
canDoTitle.textContent = 'What I can do:';
specsSection.appendChild(canDoTitle);

const canDoList = document.createElement('ul');
for (const item of canDo) {
  const li = document.createElement('li');
  li.textContent = item;
  canDoList.appendChild(li);
}
specsSection.appendChild(canDoList);

const cannotDoTitle = document.createElement('h2');
cannotDoTitle.textContent = 'What I cannot do:';
specsSection.appendChild(cannotDoTitle);

const cannotDoList = document.createElement('ul');
for (const item of cannotDo) {
  const li = document.createElement('li');
  li.textContent = item;
  cannotDoList.appendChild(li);
}
specsSection.appendChild(cannotDoList);

body.appendChild(specsSection);

const jobsSection = document.createElement('section');
jobsSection.id = 'jobs';

const jobsHeader = document.createElement('h2');
jobsHeader.textContent = 'PREVIOUS JOBS';
jobsSection.appendChild(jobsHeader);

const container = document.createElement('div');
container.id = 'jobs-container';

for (const job of jobs) {
  const card = document.createElement('div');
  card.className = 'job-card';

  const title = document.createElement('h2');
  title.textContent = job.title;

  const img = document.createElement('img');
  img.src = `../images/${job.image}`;
  img.alt = job.title;

  const desc = document.createElement('p');
  desc.textContent = job.description;

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(desc);

  container.appendChild(card);
}

jobsSection.appendChild(container);
body.appendChild(jobsSection);

const contactSection = document.createElement('section');
contactSection.id = 'contact';
const contact = document.createElement('p');

contact.innerHTML = `Reach me at <a href="${contactLink}" target="_blank">${contactLink}</a>`;
contactSection.appendChild(contact);

body.appendChild(contactSection);
