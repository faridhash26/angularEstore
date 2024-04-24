import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amazing-card',
  standalone: true,
  imports: [],
  templateUrl: './amazing-card.component.html',
  styleUrl: './amazing-card.component.css',
})
export class AmazingCardComponent {
  @Input({ required: true }) header!: string;
  @Input({ required: true }) image!: string;
  @Input({ required: true }) price!: string;
}
