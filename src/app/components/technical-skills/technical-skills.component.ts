import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
  description?: string;
}

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technical-skills.component.html',
  styleUrl: './technical-skills.component.scss'
})
export class TechnicalSkillsComponent implements OnInit, AfterViewInit {
  @ViewChild('section') sectionRef!: ElementRef<HTMLElement>;
  sectionInView = false;

  skillCategories: SkillCategory[] = [
    {
      category: 'Proficient',
      skills: [
        { name: 'HTML5', percentage: 92 },
        { name: 'CSS3/SCSS', percentage: 93 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'Angular 8+', percentage: 85 },
        { name: 'TypeScript', percentage: 85 },
        { name: 'Bootstrap', percentage: 88 },
        { name: 'Tailwind', percentage: 80 },
        { name: 'Storybook', percentage: 85 },
        { name: 'Material UI', percentage: 80 },
        { name: 'Git', percentage: 89 }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Adobe Photoshop', percentage: 82 },
        { name: 'Adobe XD', percentage: 78 },
        { name: 'Illustrator', percentage: 75 },
        { name: 'VS Code', percentage: 95 },
        { name: 'Cursor', percentage: 90 },
        { name: 'ChatGPT', percentage: 85 }
      ]
    },
    {
      category: 'SD Model',
      skills: [
        { name: 'Agile Methodology', percentage: 90 },
        { name: 'Iterative Development', percentage: 85 },
        { name: 'Scrum', percentage: 88 }
      ]
    }
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {}

  getAnimationDelay(categoryIndex: number, skillIndex: number): number {
    let delay = 0;
    for (let i = 0; i < categoryIndex; i++) {
      delay += this.skillCategories[i].skills.length * 60;
    }
    return delay + skillIndex * 60;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.sectionInView = true;
        this.cdr.detectChanges();
      }, 0);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.sectionInView) {
            setTimeout(() => {
              this.sectionInView = true;
              this.cdr.detectChanges();
            }, 500);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    if (this.sectionRef?.nativeElement) {
      observer.observe(this.sectionRef.nativeElement);
    }
  }
}
