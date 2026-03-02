import { Project } from '../models/Project.js';
import { Profile } from '../models/Profile.js';

export const apiService = {
    /**
     * Fetches profile data and returns a Profile instance
     */
    async fetchProfile() {
        try {
            const response = await fetch('./data/profile.json');
            
            if (!response.ok) {
                throw new Error(`Failed to fetch profile: ${response.statusText}`);
            }

            const data = await response.json();
            // Map the raw object to the Profile Class
            return new Profile(data);
        } catch (error) {
            console.error("Profile Fetch Error:", error);
            return null; // Return null so the UI can handle the empty state
        }
    },

    /**
     * Fetches an array of projects and returns an array of Project instances
     */
    async fetchProjects() {
        try {
            const response = await fetch('./data/projects.json');

            if (!response.ok) {
                throw new Error(`Failed to fetch projects: ${response.statusText}`);
            }

            const data = await response.json();
            // Map the array of raw objects into an array of Project Classes
            return data.map(projectData => new Project(projectData));
        } catch (error) {
            console.error("Projects Fetch Error:", error);
            return []; // Return empty array to prevent map errors in UI
        }
    }
};