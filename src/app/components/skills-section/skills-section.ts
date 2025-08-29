import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SkillsCard, SkillIcon } from '../skills-card/skills-card';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [SkillsCard],
  templateUrl: './skills-section.html',
  styleUrls: ['./skills-section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSection implements AfterViewInit {
  @ViewChild('skillsSection', { static: false }) skillsSection!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Data para frontend
  frontendIcons: SkillIcon[] = [
    { name: 'Angular', src: '/icons/angular.svg' },
    { name: 'TypeScript', src: '/icons/typescript.svg' },
    { name: 'C#', src: '/icons/csharp.svg' },
  ];

  // Data para backend
  backendIcons: SkillIcon[] = [
    { name: 'Node.js', src: '/icons/nodejs.svg' },
    { name: 'C#', src: '/icons/csharp.svg' },
    { name: 'TypeScript', src: '/icons/typescript.svg' },
  ];

  // Data para herramientas
  toolsIcons: SkillIcon[] = [
    { name: 'Git', src: '/icons/git.svg' },
    { name: 'Docker', src: '/icons/docker.svg' },
  ];

  // Cards finales
  cards = [
    { title: 'Frontend', icons: this.frontendIcons },
    { title: 'Backend', icons: this.backendIcons },
    { title: 'Tools', icons: this.toolsIcons },
  ];

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const sectionEl = this.skillsSection.nativeElement;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cards = sectionEl.querySelectorAll('.shine-card');
          if (entry.isIntersecting) {
            // Pequeño delay para asegurar que los componentes hijos estén renderizados
            setTimeout(() => {
              cards.forEach((card: HTMLElement) => card.classList.add('animate'));
            }, 50);
          } else {
            cards.forEach((card: HTMLElement) => card.classList.remove('animate'));
          }
        });
      },
      { threshold: 0.8 }
    );

    observer.observe(sectionEl);
  }

  trackByTitle(index: number, item: { title: string; icons: SkillIcon[] }) {
    return item.title;
  }
}
