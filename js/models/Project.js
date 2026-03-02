import { ui } from '../utils/render.js';

export class Project {
    constructor(data) {
        Object.assign(this, data);
    }

    toHtmlCard() {
        // 1. Create the main wrapper
        const card = ui.createElement('article', 'project-card');

        // 2. Create the content elements
        const title = ui.createElement('h3', 'project-title', this.title);
        const desc = ui.createElement('p', 'project-desc', this.description);
        
        // 3. Create Tech Badges Container
        const techContainer = ui.createElement('div', 'tech-stack');
        this.tech.forEach(skill => {
            const badge = ui.createElement('span', 'badge', skill);
            techContainer.appendChild(badge);
        });

        // 4. Create Links Container
        const linkContainer = ui.createElement('div', 'project-links');
        const ghLink = ui.createElement('a', 'btn-link', 'GitHub', { href: this.github, target: '_blank' });
        const liveLink = ui.createElement('a', 'btn-link primary', 'Live Demo', { href: this.live, target: '_blank' });
        
        linkContainer.append(ghLink, liveLink);

        // 5. Assemble everything
        card.append(title, desc, techContainer, linkContainer);

        return card;
    }
}