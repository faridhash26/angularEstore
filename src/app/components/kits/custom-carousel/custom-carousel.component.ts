import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomCarouselModule } from './custom-carousel.module';
@Component({
  selector: 'app-custom-carousel',
  standalone: true,
  imports: [CustomCarouselModule],
  animations: [],

  templateUrl: './custom-carousel.component.html',
  styleUrl: './custom-carousel.component.css',
})
export class CustomCarouselComponent {
  images = [
    'https://via.placeholder.com/600x300/FF5733/FFFFFF',
    'https://via.placeholder.com/600x300/3498DB/FFFFFF',
    'https://via.placeholder.com/600x300/2ECC71/FFFFFF',
    'https://via.placeholder.com/600x300/F1C40F/FFFFFF',
  ];

  currentSlide = 0;

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0 ? this.images.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide === this.images.length - 1 ? 0 : this.currentSlide + 1;
  }
}
