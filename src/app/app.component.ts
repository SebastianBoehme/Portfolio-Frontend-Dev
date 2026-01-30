import { Component, HostListener, signal } from '@angular/core'; // signal & HostListener hinzugefügt
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../app/shared/navigation/navigation.component';
import { FooterComponent } from '../app/shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';

  // Wir erstellen zwei Signals für die X und Y Koordinate
  mouseX = signal(0);
  mouseY = signal(0);

  // Der HostListener "hört" auf Bewegungen im gesamten Dokument
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Wir setzen die neuen Werte in die Signals
    this.mouseX.set(event.clientX);
    this.mouseY.set(event.clientY);
  }
}