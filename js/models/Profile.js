import { ui } from '../utils/render.js';

export class Profile {
    constructor(data) {
        Object.assign(this, data);
    }

    renderHero() {
        const fragment = document.createDocumentFragment();

    const nameH1 = ui.createElement('h1', 'fade-in', this.name);
    // This matches the .subtitle class in our CSS
    const titleH3 = ui.createElement('h3', 'subtitle', this.title); 
    // This matches the .bio-text class in our CSS
    const bioP = ui.createElement('p', 'bio-text', this.bio);

    fragment.append(nameH1, titleH3, bioP);
    return fragment;
    }

    renderSkills() {
        const skillList = ui.createElement('div', 'skills-grid');
        this.skills.forEach(skill => {
            const badge = ui.createElement('span', 'skill-badge', skill);
            skillList.appendChild(badge);
        });
        return skillList;
    }

    renderAbout() {
    const container = ui.createElement('div', 'row align-items-center');

    // Column 1: Image / Illustration
    const colImg = ui.createElement('div', 'col-md-12 col-lg-6 col-sm-12 text-center mb-4 mb-md-0');
    const img = ui.createElement('img', 'img-fluid rounded-circle shadow-lg about-img', '', {
        src: this.profileImage || 'https://via.placeholder.com/300', 
        alt: this.name
    });
    colImg.appendChild(img);

    // Column 2: Text Content
    const colText = ui.createElement('div', 'col-md-12 col-lg-6 col-sm-12');
    const title = ui.createElement('h2', 'mb-3', 'About Me');
    const description = ui.createElement('p', 'lead', this.fullBio);
    
    // Quick Info List
    const infoList = ui.createElement('ul', 'list-unstyled mt-4 about-info');
    infoList.innerHTML = `
        <li><strong>Location:</strong> ${this.location}</li>
        <li><strong>Experience:</strong> ${this.experience}</li>
        <li><strong>Available for:</strong> Freelance & Full-time</li>
    `;

    colText.append(title, description, infoList);
    container.append(colImg, colText);
    
    return container;
}
}