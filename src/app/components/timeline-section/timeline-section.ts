import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimelineItem, TimelineItemData } from '../timeline-item/timeline-item';

@Component({
  selector: 'app-timeline-section',
  standalone: true,
  imports: [TimelineItem],
  templateUrl: './timeline-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineSection {
  timelineItems: TimelineItemData[] = [
    {
      date: '2022 - Actualidad',
      role: 'Frontend Developer',
      company: 'Tech Corp',
      description: 'Desarrollo de aplicaciones SPA con Angular y Tailwind.',
      tags: ['Angular', 'TypeScript', 'TailwindCSS'],
    },
    {
      date: '2020 - 2022',
      role: 'Backend Developer',
      company: 'Data Systems',
      description: 'Creación de APIs REST en .NET Core y microservicios.',
      tags: ['.NET', 'C#', 'SQL'],
    },
    {
      date: '2018 - 2020',
      role: 'Intern',
      company: 'Startup Labs',
      description: 'Soporte en proyectos de software y QA.',
      tags: ['QA', 'Scrum'],
    },
  ];
}
