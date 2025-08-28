import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  @Input() name!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() technologies: string[] = [];
  @Input() preview?: string;
  @Input() github?: string;
}
