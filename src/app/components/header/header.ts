import { Component, HostListener, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Importante para ngClass

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
})
export class Header implements OnInit {
  isScrolled = signal(false); // Angular 17 signal
  theme: 'light' | 'dark' | 'system' = 'system';

  ngOnInit(): void {
    this.loadTheme();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  loadTheme() {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    this.theme = stored ?? 'system';
    this.applyTheme();
  }

  applyTheme() {
    const html = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (this.theme === 'dark' || (this.theme === 'system' && prefersDark)) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}
