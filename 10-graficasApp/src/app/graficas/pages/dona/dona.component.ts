import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Other'
  ];

  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 220],
  ];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    { backgroundColor: ['#85F0BB', '#95A7DB', '#E9EB9D', '#EBB08D'] }
  ];

  constructor() {}

}
