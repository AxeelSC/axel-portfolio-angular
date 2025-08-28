import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';

export interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  preview?: string;
  github?: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ProjectCard], // 👈 se importa aquí
  templateUrl: './projects-section.html',
  styleUrls: ['./projects-section.scss'],
})
export class ProjectsSection {
  projects: Project[] = [
    {
      name: 'Portfolio Web',
      description: 'Un sitio web personal desarrollado con Angular y TailwindCSS.',
      image: 'Project_Image.jpg',
      technologies: ['Angular', 'Tailwind', 'TypeScript'],
      preview: '#',
      github: 'https://github.com/AxeelSC',
    },
    {
      name: 'Gestor de Tareas',
      description: 'Aplicación para la gestión de tareas con autenticación y roles.',
      image: 'Project_Image.jpg',
      technologies: ['.NET Core', 'Angular', 'SQL Server'],
      preview: '#',
      github: 'https://github.com/AxeelSC',
    },
    {
      name: 'App Móvil Fitness',
      description: 'Aplicación móvil multiplataforma para rutinas de entrenamiento.',
      image: 'Project_Image.jpg',
      technologies: ['Flutter', 'Firebase'],
      preview: '#',
      github: 'https://github.com/AxeelSC',
    },
  ];
}
