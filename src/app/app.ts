import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { TimelineSection } from './components/timeline-section/timeline-section';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { CommonModule } from '@angular/common';
import { SkillsSection } from './components/skills-section/skills-section';
import { ProjectsSection } from './components/projects-section/projects-section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    Hero,
    TimelineSection,
    SkillsSection,
    ProjectsSection,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
