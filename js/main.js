import { apiService } from "./services/apiService.js";
import { ui } from "./utils/render.js";
import { emailService } from "./services/emailService.js";

async function init() {
  const profile = await apiService.fetchProfile();
  const projects = await apiService.fetchProjects();

  //  Render Hero
  const heroSection = document.getElementById("hero");
  if (heroSection && profile) {
    ui.clearContainer(heroSection);
    heroSection.appendChild(profile.renderHero());
  }
  // render about
  const aboutSection = document.getElementById("about");
  if (aboutSection && profile) {
    ui.clearContainer(aboutSection);
    aboutSection.appendChild(profile.renderAbout());
  }

  // Render Skills
  const skillsSection = document.getElementById("skills");
  if (skillsSection && profile) {
    skillsSection.appendChild(
      ui.createElement("h2", "text-center", "Technical Skills"),
    );
    skillsSection.appendChild(profile.renderSkills());
  }

  //  Render Projects
  const projectSection = document.getElementById("projects");
  projectSection.appendChild(
    ui.createElement("h2", "text-center", "Featured Projects"),
  );
  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) {
    projects.forEach((project) => {
      projectsGrid.appendChild(project.toHtmlCard());
    });
  }
  projectSection.appendChild(projectsGrid);
  // email service
  emailService.init();

  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      const result = await emailService.sendContactEmail(contactForm);

      if (result.success) {
        alert("Message sent! I will get back to you soon.");
        contactForm.reset();
      } else {
        alert("Oops! Something went wrong. Please check the console.");
      }

      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
