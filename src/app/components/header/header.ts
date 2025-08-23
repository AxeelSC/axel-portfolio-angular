import { Component, HostListener, OnInit, signal, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
})
export class Header implements OnInit {
  isScrolled = signal(false);
  theme: 'light' | 'dark' | 'system' = 'system';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTheme();
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 20);
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);
      this.applyTheme();
    }
  }

  loadTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
      this.theme = stored ?? 'system';
      this.applyTheme();
    }
  }

  applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const html = document.documentElement;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (this.theme === 'dark' || (this.theme === 'system' && prefersDark)) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  }
}
