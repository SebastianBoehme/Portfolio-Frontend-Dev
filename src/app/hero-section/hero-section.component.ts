import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  email: string = 'sebastianboehme.dev@gmail.com';

  scrollToAnchor(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  marqueeItems: string[] = [
    'HERO.LOCATION',
    'HERO.OPEN_FOR_WORK',
    'HERO.REMOTELY',
  ];

  constructor(public translate: TranslateService) {}
}
