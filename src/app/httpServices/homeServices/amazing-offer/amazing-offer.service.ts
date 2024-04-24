import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AmazingOfferService extends ApiServiceService {
  private AmazingOffersubject = new Subject<any>();
  constructor(http: HttpClient) {
    super(http);
  }

  getAmazingOffers() {
    return this.getAll('v1/incredible-offers/').subscribe({
      next: (res) => {
        this.AmazingOffersubject.next(res);
      },
    });
  }
  getAmazingOffersubjectObservable() {
    return this.AmazingOffersubject.asObservable();
  }
}
