import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss', // Beachte: .scss bleibt
})
export class NavigationComponent {
  isMenuOpen: boolean = false;

  constructor(public translate: TranslateService) {}

  switchLanguage() {
    const current = this.translate.getCurrentLang() || 'de';
    const nextLang = current === 'de' ? 'en' : 'de';
    this.translate.use(nextLang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateScrollLock();
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.updateScrollLock();
  }

  private updateScrollLock() {
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
