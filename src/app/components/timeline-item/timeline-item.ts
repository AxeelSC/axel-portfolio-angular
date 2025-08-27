import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type TimelinePosition = 'left' | 'right';

export interface TimelineItemData {
  date: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  templateUrl: './timeline-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineItem {
  @Input({ required: true }) data!: TimelineItemData;
  @Input() position: TimelinePosition = 'left';
}
