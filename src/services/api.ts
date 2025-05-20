import type { Project, Experience, Education, Skill } from '../types';

class ApiService {
  private baseUrl: string = import.meta.env.VITE_API_URL || '';

  private async fetch<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }

  async getProjects(): Promise<Project[]> {
    return this.fetch<Project[]>('/projects');
  }

  async getExperience(): Promise<Experience[]> {
    return this.fetch<Experience[]>('/experience');
  }

  async getEducation(): Promise<Education[]> {
    return this.fetch<Education[]>('/education');
  }

  async getSkills(): Promise<Skill[]> {
    return this.fetch<Skill[]>('/skills');
  }

  async sendContactForm(data: { name: string; email: string; message: string }): Promise<void> {
    const response = await fetch(`${this.baseUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to send message: ${response.statusText}`);
    }
  }
}

export const api = new ApiService(); 