import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input()
  horizontal: boolean = false;

  @Input()
  public barChartLabels: Label[] = [
    /*'2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',*/
  ];

  @Input()
  public barChartData: ChartDataSets[] = [
    /*{
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      backgroundColor: '#DB8AC5',
      hoverBackgroundColor: 'pink',
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      backgroundColor: '#7783F0',
      hoverBackgroundColor: 'blue',
    },
    {
      data: [8, 38, 70, 59, 66, 80, 100],
      label: 'Series C',
      backgroundColor: '#93DBC3',
      hoverBackgroundColor: 'green',
    },*/
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';

  public barChartLegend = true;

  constructor() { }

  /**
   * Usamos en ngOnInit para establecer el cambio
   * cuando se ha generando el componente
   **/
  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
  }

}
