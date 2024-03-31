import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainChartService extends ApiServiceService {
  private mainChartDataSubject = new Subject<any>();

  constructor(http: HttpClient) {
    super(http);
  }

  getUserMainChart() {
    return this.get('line-chart').subscribe({
      next: (response) => {
        this.mainChartDataSubject.next(response);
      },
    });
  }
  getMainChartDataObservable() {
    return this.mainChartDataSubject.asObservable();
  }
}
