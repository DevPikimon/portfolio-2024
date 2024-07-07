/* 여기부터 my skills section */
document.getElementById('code-icon').innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
`;

document.getElementById('codepen-icon').innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <line x1="12" x2="12" y1="22" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
    <polyline points="2 15.5 12 8.5 22 15.5" />
    <line x1="12" x2="12" y1="2" y2="8.5" />
  </svg>
`;

document.getElementById('css-icon').innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <line x1="12" x2="12" y1="22" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
    <polyline points="2 15.5 12 8.5 22 15.5" />
    <line x1="12" x2="12" y1="2" y2="8.5" />
  </svg>
`;

document.getElementById('network-icon').innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="16" y="16" width="6" height="6" rx="1" />
    <rect x="2" y="16" width="6" height="6" rx="1" />
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
    <path d="M12 12V8" />
  </svg>
`;

document.getElementById('database-icon').innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
`;

document.getElementById('git-icon').innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="6" r="3" />
    <path d="M5 9v6" />
    <circle cx="5" cy="18" r="3" />
    <path d="M12 3v18" />
    <circle cx="19" cy="6" r="3" />
    <path d="M16 15.7A9 9 0 0 0 19 9" />
  </svg>
`;

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    let color;
    switch (card.id) {
      case 'card-javascript':
        color = '#f7df1e'; // JavaScript color
        break;
      case 'card-react':
        color = '#61dafb'; // React color
        break;
      case 'card-css':
        color = '#264de4'; // CSS color
        break;
      case 'card-nodejs':
        color = '#68a063'; // Node.js color
        break;
      case 'card-databases':
        color = '#f29111'; // General database color
        break;
      case 'card-git':
        color = '#f1502f'; // Git color
        break;
      default:
        color = '#ffffff'; // Default color
    }
    card.style.backgroundColor = color;
  });

  card.addEventListener('mouseout', () => {
    card.style.backgroundColor = '#ffffff'; // Reset to default background color
  });
});
/* 여기까지 my skills section */

/* 여기부터 projects */
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function() {
      this.querySelector('.card-inner').classList.toggle('is-flipped');
  });
});

document.getElementById('flip-all').addEventListener('click', function() {
  const cardInners = document.querySelectorAll('.card-inner');
  const flippedCount = Array.from(cardInners).filter(cardInner => cardInner.classList.contains('is-flipped')).length;

  const shouldFlipToFront = flippedCount > cardInners.length / 2;

  cardInners.forEach(cardInner => {
      cardInner.classList.toggle('is-flipped', !shouldFlipToFront);
  });
});
/* 여기까지 projects */

/* 여기부터 contact*/
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Form submission logic here
    alert("검토해주셔서 감사합니다!");
  });
});
/* 여기까지 contact*/