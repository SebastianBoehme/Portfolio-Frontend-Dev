import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  email: string = 'sebastianboehme.dev@gmail.com';
  currentYear: number = new Date().getFullYear();
}
