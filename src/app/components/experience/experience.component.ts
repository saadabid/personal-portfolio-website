import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Responsibility {
  text: string;
  link?: string;
}

export interface ExperienceItem {
  company: string;
  duration: string;
  location: string;
  role: string;
  description: string;
  responsibilities: Responsibility[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      company: 'Masdr - مصدر',
      duration: '2025 – Present',
      location: 'Riyadh, KSA',
      role: 'Senior IT Developer | Frontend & UX Engineering',
      description: 'I am working with the Masdr, in Saudi Arabia. I have extensive experience working with international teams.',
      responsibilities: [
        { text: 'Mainly contributing to the Mudad platform mudad.com.sa — Saudi Arabia\'s digital payroll and compliance system under the Ministry of Human Resources & Social Development—focusing on Angular frontend development.', link: 'https://mudad.com.sa' },
        { text: 'Developing, maintaining, and documenting the organization\'s Design system in Storybook, ensuring reusable, scalable, and consistent Angular UI components.' },
        { text: 'Spearheaded UI modernization initiatives including Angular upgrades and legacy component refactoring, improving maintainability and performance.' },
        { text: 'Lead initiatives to improve product usability by collaborating with UX teams, analyzing user behavior, and refining interface flows to deliver a smoother and more intuitive experience.' },
        { text: 'Leveraged Cursor and ChatGPT to accelerate development tasks, generate optimized code snippets, automate refactoring, and enhance documentation efficiency.' }
      ]
    },
    {
      company: 'Royal Cyber',
      duration: '2021 – 2024',
      location: 'Riyadh, KSA',
      role: 'Senior UI UX Engineer',
      description: 'Delivered scalable Angular applications and design systems for government and enterprise clients in Saudi Arabia.',
      responsibilities: [
        { text: 'Developed scalable and maintainable Angular applications for GOSI (General Organization for Social Insurance – KSA).' },
        { text: 'Writing design system using Storybook for developing reusable web components, followed atomic design pattern.' },
        { text: 'Adding new features, functionality, and capabilities, integrating with backend APIs.' },
        { text: 'Creating application wireframes and prototypes with enhanced UI features.' },
        { text: 'Collaborate effectively with design, and platform teams to define specifications and deliver features iteratively.' },
        { text: 'Performing bug fixes and code reviews to ensure code quality and performance.' },
        { text: 'Create multi-language web applications to ensure globalization.' }
      ]
    },
    {
      company: 'Avanza Solutions (Pvt.) Ltd',
      duration: '2020 – 2021',
      location: 'Karachi, Pakistan',
      role: 'UI UX Developer & Designer',
      description: 'Focused on UX research, prototyping, and building reusable React components for product development.',
      responsibilities: [
        { text: 'Creating application prototypes and doing UX research on similar application designs and user interface modules.' },
        { text: 'Gather and evaluate user requirements in collaboration with product managers and engineers.' },
        { text: 'Implement reusable React Components as per the design to integrate into product development.' },
        { text: 'Identify and troubleshoot UX problems. Cross-browser compatibility issues and ways to work around them.' }
      ]
    }
    // To add more experiences, push new objects to this array with:
    // { company, duration, location, role, description, responsibilities }
    // responsibilities: [{ text: '...' }] or [{ text: '...', link: 'https://...' }]
  ];
}
