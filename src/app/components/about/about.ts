import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  standalone: true,
})
export class About implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const updateDash = () => {
      const cards: NodeListOf<HTMLElement> =
        this.el.nativeElement.querySelectorAll('.card-wrapper');
      cards.forEach((card) => {
        const rect: SVGRectElement | null = card.querySelector('rect');
        if (rect) {
          const width = rect.getBoundingClientRect().width;
          const height = rect.getBoundingClientRect().height;
          const perimeter = 2 * (width + height);
          rect.style.setProperty('--dashlength', `${perimeter}`);
        }
      });
    };

    updateDash();
    window.addEventListener('resize', updateDash);
  }
}
