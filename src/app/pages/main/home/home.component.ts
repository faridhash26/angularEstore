import { Component } from '@angular/core';
import { CustomCarouselComponent } from '../../../components/kits/custom-carousel/custom-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
