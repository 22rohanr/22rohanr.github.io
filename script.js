// Get references to the buttons
const homeButton = document.getElementById('home-button');
const projectsButton = document.getElementById('projects-button');
const linkedinButton = document.getElementById('linkedin-button');
const githubButton = document.getElementById('github-button');
const nameButton = document.getElementById('name-button');

// Add event listeners to the buttons
homeButton.addEventListener('click', handleHomeClick);
projectsButton.addEventListener('click', handleProjectsClick);
linkedinButton.addEventListener('click', handleLinkedinClick);
githubButton.addEventListener('click', handleGithubClick);
nameButton.addEventListener('click', handleNameClick)


function handleHomeClick() {
    window.location.href = '/';
}

function handleProjectsClick() {
    window.location.href = 'projects';
}

function handleLinkedinClick() {
    window.open('https://www.linkedin.com/in/rohan-rashingkar/', '_blank');
}

function handleGithubClick() {
    window.open('https://github.com/22rohanr/', '_blank');
}

function handleNameClick() {
    window.location.href = '/';
}