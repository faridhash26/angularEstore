import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-carousel.component.html',
  styleUrl: './custom-carousel.component.css',
})
export class CustomCarouselComponent {
  currentIndex: number = 0;

  caruselData = [
    {
      url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/6dc53c1376c8da52b75cf46a290211fa4f8b60a9_1710589468.jpg?x-oss-process=image/quality,q_95/format,webp',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/24751f1907fb6128f1bc437ab51c1065408ffffc_1710592160.jpg?x-oss-process=image/quality,q_95/format,webp',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/9266b890a9139b94cee5c2f5bc386014811a2075_1710052288.jpg?x-oss-process=image/quality,q_95/format,webp',
    },
  ];

  slideWidth: number = 300; // Width of each slide, adjust as needed

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.caruselData.length) %
      this.caruselData.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.caruselData.length;
  }
}
