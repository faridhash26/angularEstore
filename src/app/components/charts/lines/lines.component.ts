import { Component, Input, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  NgApexchartsModule,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-lines',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './lines.component.html',
  styleUrl: './lines.component.css',
})
export class LinesComponent {
  @ViewChild('chart') chart!: ChartComponent;

  @Input({ required: true }) charsSries!: ApexAxisChartSeries;
  @Input({ required: true }) chartLabels!: ApexXAxis;
  title = { text: 'My First Angular Chart' };
  chartModel = {
    height: 350,
    type: 'bar',
  };
  constructor() {
    console.log('chartLabels', this.chartLabels);
  }
}
