import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  name: string;
  url?: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Mudad',
      url: 'https://mudad.com.sa',
      description: 'Mudad is a digital platform to develop and facilitate administrative and financial procedures including paying, protecting, and processing employees\' wages for the organizations. Mainly, my responsibility is to enhance the customer support modules by creating new features and interactive user interfaces.',
      technologies: ['Angular 8+', 'Html/CSS', 'Sass', 'Bootstrap', 'Storybook', 'Jenkins']
    },
    {
      name: 'Masdr Website',
      url: 'https://masdr.sa',
      description: 'Engineered scalable marketing landing pages of Masdr website using Angular and an in-house design system. Collaborated with UX team to ensure pixel-perfect implementation and improved usability. Improved page performance, responsiveness, and SEO best practices.',
      technologies: ['Angular 8+', 'Html/CSS', 'Sass', 'Bootstrap', 'Storybook', 'Jenkins']
    },
    {
      name: 'Angular Design System Library',
      description: 'Designed and implemented a scalable Angular Design System with reusable components and Storybook documentation, enabling consistent UI development across multiple applications.',
      technologies: ['Angular 8+', 'Html/CSS', 'Sass', 'Bootstrap', 'Storybook', 'Jenkins']
    },
    {
      name: 'UX Design Portfolio',
      url: 'https://www.behance.net/msaad3',
      description: 'UX Design portfolio includes COVID Health mobile application user experience design, Grocery Mobile Application design, and Enterprise resource planning software UX design.',
      technologies: ['Adobe XD', 'Adobe Photoshop', 'Illustrator']
    }
  ];

  getProjectUrl(project: Project): string {
    if (!project.url) return '#';
    return project.url.startsWith('http') ? project.url : `https://${project.url}`;
  }
}
