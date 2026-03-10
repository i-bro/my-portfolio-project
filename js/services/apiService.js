import { Project } from "../models/Project.js";
import { Profile } from "../models/Profile.js";

export const apiService = {
  async fetchProfile() {
    try {
      const response = await fetch("./data/profile.json");

      if (!response.ok) {
        throw new Error(`Failed to fetch profile: ${response.statusText}`);
      }

      const data = await response.json();

      return new Profile(data);
    } catch (error) {
      console.error("Profile Fetch Error:", error);
      return null;
    }
  },

  async fetchProjects() {
    try {
      const response = await fetch("./data/projects.json");

      if (!response.ok) {
        throw new Error(`Failed to fetch projects: ${response.statusText}`);
      }

      const data = await response.json();

      return data.map((projectData) => new Project(projectData));
    } catch (error) {
      console.error("Projects Fetch Error:", error);
      return [];
    }
  },
};
