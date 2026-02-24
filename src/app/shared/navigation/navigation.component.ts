import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  constructor(public translate: TranslateService) {}

  switchLanguage() {
    const nextLang = this.translate.currentLang === 'de' ? 'en' : 'de';
    this.translate.use(nextLang);
  }
}
