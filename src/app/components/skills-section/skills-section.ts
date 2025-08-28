import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SkillsCard, SkillIcon } from '../skills-card/skills-card';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [SkillsCard],
  templateUrl: './skills-section.html',
  styleUrls: ['./skills-section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSection {
  // Data para frontend
  frontendIcons: SkillIcon[] = [
    { name: 'Angular', src: '/icons/angular.svg' },
    { name: 'TypeScript', src: '/icons/typescript.svg' },
    { name: 'C#', src: '/icons/csharp.svg' },
    { name: 'TypeScript', src: '/icons/typescript.svg' },
  ];

  // Data para backend
  backendIcons: SkillIcon[] = [
    { name: 'Angular', src: '/icons/angular.svg' },
    { name: 'TypeScript', src: '/icons/typescript.svg' },
    { name: 'C#', src: '/icons/csharp.svg' },
    { name: 'TypeScript', src: '/icons/typescript.svg' },
    { name: 'C#', src: '/icons/csharp.svg' },
  ];

  // Data para herramientas
  toolsIcons: SkillIcon[] = [
    { name: 'Angular', src: '/icons/angular.svg' },
    { name: 'TypeScript', src: '/icons/typescript.svg' },
  ];

  // Cards finales
  cards = [
    { title: 'Frontend', icons: this.frontendIcons },
    { title: 'Backend', icons: this.backendIcons },
    { title: 'Tools', icons: this.toolsIcons },
  ];
}
