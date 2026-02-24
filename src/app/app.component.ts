import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../app/shared/navigation/navigation.component';
import { FooterComponent } from '../app/shared/footer/footer.component';
import { TranslateService } from '@ngx-translate/core'; // <--- 1. Import hinzufügen

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';

  mouseX = signal(0);
  mouseY = signal(0);

  // 2. Konstruktor hinzufügen, um den Service zu starten
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX.set(event.clientX);
    this.mouseY.set(event.clientY);
  }
}
