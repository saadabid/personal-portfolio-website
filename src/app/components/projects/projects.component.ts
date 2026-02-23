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
    },
    {
      name: 'Smart Coupon (Digital Coupons platform)',
      description: 'Smart Coupon web application will be utilized for searching and sharing digital coupons. Developed frontend for displaying coupons and Admin panel for management using Angular. Ensure mobile responsive so mobile users can easily use it.',
      technologies: ['Angular', 'HTML/CSS', 'Bootstrap']
    },
    {
      name: 'Unison Ace',
      url: 'https://www.saadabid.dev/customer-experience-management-cxm/',
      description: 'Discover pain points of the current customer experience management application and propose solutions to improve user experience. User interface Design for existing or new features in the product and implement into React reusable components. Closely Work with the backend team to fulfill design side requirements.',
      technologies: ['React JS', 'HTML/CSS', 'Bootstrap', 'Semantic UI']
    },
    {
      name: 'Occupational Health & Safety Monitoring',
      description: 'OHS provides a platform in which self-assessment and field audits are conducted so that certificates are issued to establishments. Developed using React JS and Material UI. Also, integrate bilingual support for Arabic and English languages. Ensure to make reusable components and responsive for mobile devices.',
      technologies: ['React JS', 'HTML/CSS', 'Bootstrap', 'Material UI']
    },
    {
      name: 'AMBIT – Internet Banking (Ajman Bank - UAE)',
      description: 'Discover Revamp product (Internet Banking) theme to the client-approved design provided by Design Team. Identify and troubleshoot UX problems in existing internet banking application. Resolved Cross-browser compatibility issues and ways to work around them.',
      technologies: ['Angular JS', 'HTML/CSS', 'Bootstrap']
    }
  ];

  getProjectUrl(project: Project): string {
    if (!project.url) return '#';
    return project.url.startsWith('http') ? project.url : `https://${project.url}`;
  }
}
