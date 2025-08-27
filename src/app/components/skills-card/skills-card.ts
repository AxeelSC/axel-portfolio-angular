import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export interface SkillIcon {
  name: string;
  src: string;
}

@Component({
  selector: 'app-skills-card',
  standalone: true,
  templateUrl: './skills-card.html',
  styleUrls: ['./skills-card.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsCard {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) icons!: SkillIcon[];
}
