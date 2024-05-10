import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomCarouselModule } from './custom-carousel.module';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-custom-carousel',
  standalone: true,
  imports: [CustomCarouselModule, CommonModule],
  animations: [],

  templateUrl: './custom-carousel.component.html',
  styleUrl: './custom-carousel.component.css',
})
export class CustomCarouselComponent {
  items = [
    {
      image:
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/7f4b5525cbb171d64f251177948565a7ed68620e_1712133860.jpg?x-oss-process=image/quality,q_95/format,webp',
      title: 'Slide 1',
      description: 'Description for slide 1',
    },
    {
      image:
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/ca571d902c5f361ee39c7734bc05b0f253a6f53b_1714980147.jpg?x-oss-process=image/quality,q_95/format,webp',
      title: 'Slide 2',
      description: 'Description for slide 2',
    },
    {
      image:
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/ebcd2737d616dfa853c97d9b3486282ce315d646_1715268861.jpg?x-oss-process=image/quality,q_95/format,webp',
      title: 'Slide 3',
      description: 'Description for slide 3',
    },
  ];

  activeIndex = 0;
  timer: any;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.next();
    }, 3000); // Set interval time in milliseconds (e.g., 3000ms = 3 seconds)
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  next() {
    this.activeIndex =
      this.activeIndex === this.items.length - 1 ? 0 : this.activeIndex + 1;
  }

  prev() {
    this.activeIndex =
      this.activeIndex === 0 ? this.items.length - 1 : this.activeIndex - 1;
  }
}
