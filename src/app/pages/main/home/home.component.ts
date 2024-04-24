import { Component, OnInit } from '@angular/core';
import { CustomCarouselComponent } from '../../../components/kits/custom-carousel/custom-carousel.component';
import { AmazingCardComponent } from '../../../components/amazing-card/amazing-card.component';
import { AmazingOfferService } from '../../../httpServices/homeServices/amazing-offer/amazing-offer.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
interface IAmazingdata {
  title: string;
  image: string;
  price: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CustomCarouselComponent,
    CommonModule,
    AmazingCardComponent,
    HttpClientModule,
  ],
  providers: [AmazingOfferService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private amazingService: AmazingOfferService) {}

  amazingdata: Array<IAmazingdata> = [];
  ngOnInit(): void {
    this.amazingService.getAmazingOffers();
    this.amazingService.getAmazingOffersubjectObservable().subscribe((data) => {
      this.amazingdata = data;
    });
  }
}
