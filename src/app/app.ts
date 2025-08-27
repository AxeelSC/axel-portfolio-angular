import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { TimelineSection } from './components/timeline-section/timeline-section';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { CommonModule } from '@angular/common';
import { SkillsSection } from './components/skills-section/skills-section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, Hero, TimelineSection, SkillsSection, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
