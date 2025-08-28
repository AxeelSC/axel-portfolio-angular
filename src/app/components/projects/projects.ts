import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  proyectos = [
    {
      nombre: 'Portfolio Personal',
      descripcion: 'Mi portfolio web con Angular y Tailwind.',
      imagen: 'Project_Image.jpg',
      tecnologias: ['Angular', 'Tailwind', 'TypeScript'],
      preview: '#',
      github: 'https://github.com/AxeelSC',
    },
    {
      nombre: 'App de Restaurantes',
      descripcion: 'Gestión de reservas y pedidos online.',
      imagen: 'Project_Image.jpg',
      tecnologias: ['React Native', '.NET API', 'Azure'],
      preview: '#',
      github: 'https://github.com/AxeelSC',
    },
    {
      nombre: 'Dashboard Admin',
      descripcion: 'Panel de control interactivo con estadísticas.',
      imagen: 'Project_Image.jpg',
      tecnologias: ['Angular', 'NgRx', 'Chart.js'],
      preview: '#',
      github: 'https://github.com/AxeelSC',
    },
  ];
}
