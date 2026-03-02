import { apiService } from './services/apiService.js';
import { ui } from './utils/render.js';

async function init() {
    const profile = await apiService.fetchProfile();
    const projects = await apiService.fetchProjects();

    // 1. Render Hero
    const heroSection = document.getElementById('hero');
    if (heroSection && profile) {
        ui.clearContainer(heroSection); // Clears the empty HTML tags
        heroSection.appendChild(profile.renderHero());
    }
    // render about
    const aboutSection = document.getElementById('about');
if (aboutSection && profile) {
    ui.clearContainer(aboutSection);
    aboutSection.appendChild(profile.renderAbout());
}

    // 2. Render Skills
    const skillsSection = document.getElementById('skills');
    if (skillsSection && profile) {
        skillsSection.appendChild(ui.createElement('h2', 'text-center', 'Technical Skills'));
        skillsSection.appendChild(profile.renderSkills());
    }

    // 3. Render Projects
    const projectSection = document.getElementById("projects");
    projectSection.appendChild(ui.createElement('h2', 'text-center', 'Featured Projects'));
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projects.forEach(project => {
            projectsGrid.appendChild(project.toHtmlCard());
        });
    }
    projectSection.appendChild(projectsGrid)
}

document.addEventListener('DOMContentLoaded', init);