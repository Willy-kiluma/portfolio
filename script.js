// Get references to the sections
const aboutSection = document.getElementById('about');
const skillsSection = document.getElementById('skills');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');

// Get references to the navigation links
const aboutLink = document.getElementById('aboutLink');
const skillsLink = document.getElementById('skillsLink');
const projectsLink = document.getElementById('projectsLink');
const contactLink = document.getElementById('contactLink');

// Function to hide all sections
function hideAllSections() {
    aboutSection.style.display = 'none';
    skillsSection.style.display = 'none';
    projectsSection.style.display = 'none';
    contactSection.style.display = 'none';
}

// Add event listeners to navigation links
aboutLink.addEventListener('click', function() {
    hideAllSections();
    aboutSection.style.display = 'block';
});

skillsLink.addEventListener('click', function() {
    hideAllSections();
    skillsSection.style.display = 'block';
});

projectsLink.addEventListener('click', function() {
    hideAllSections();
    projectsSection.style.display = 'block';
});

contactLink.addEventListener('click', function() {
    hideAllSections();
    contactSection.style.display = 'block';
});

// By default, show the About section
aboutSection.style.display = 'block';



const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Data Analyst";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Mobile Developer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Graphic Designer";
    }, 12000);

}

textLoad();
setInterval(textLoad, 11000);






