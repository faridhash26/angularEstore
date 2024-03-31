import { Component, OnInit } from '@angular/core';
import { LinesComponent } from '../../../components/charts/lines/lines.component';
import { ApexAxisChartSeries, ApexXAxis } from 'ng-apexcharts';
import { MainChartService } from '../../../httpServices/dashboard-charts/main-chart.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [LinesComponent, HttpClientModule],
  providers: [MainChartService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeAdminComponent implements OnInit {
  constructor(private chartService: MainChartService) {}
  charsSries: ApexAxisChartSeries = [
    {
      name: 'My-series',
      data: [],
    },
  ];
  chartLabels: ApexXAxis = {
    categories: [],
  };

  ngOnInit(): void {
    this.chartService.getUserMainChart();
    this.chartService.getMainChartDataObservable().subscribe((data) => {
      console.log(data);
      this.charsSries = [
        {
          name: 'My-series',
          data: data.xAxis,
        },
      ];
      this.chartLabels = {
        categories: data.yAxis,
      };
    });
  }
}
