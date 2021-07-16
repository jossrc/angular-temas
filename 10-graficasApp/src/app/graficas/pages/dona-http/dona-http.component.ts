import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [];

  public doughnutChartData: MultiDataSet = [];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    { backgroundColor: ['#85F0BB', '#95A7DB', '#E9EB9D', '#EBB08D'] },
  ];

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    /** >>>> MÉTODO 01 SIN RXJS <<<<

    this.graficasService.getUsuariosRedesSociales().subscribe((data) => {
      console.log(data);
      // Obtengo todas las llaves del objeto como un arreglo
      const labels = Object.keys(data);
      // Obtengo todas los valores del objeto como un arreglo
      const values = Object.values(data);

      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    });

    **/

    /** >>>> MÉTODO 02 CON RXJS <<<< **/
    this.graficasService
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }
}
