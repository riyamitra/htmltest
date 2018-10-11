import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-tab-history',
  templateUrl: './tab-history.component.html',
  styleUrls: ['./tab-history.component.css']
})
export class TabHistoryComponent implements OnInit {

  @ViewChild('dd') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;

  ngAfterViewInit() {
    const options: Highcharts.Options = {
      chart: {
        height: 294
      },
      title: {
        text: 'Number of unique visits last 30 days'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      colors: ['#28a745'],
      series: [{
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }]
    };

    this.chart = chart(this.chartTarget.nativeElement, options);
  }

  constructor() { }

  ngOnInit() {
  }

}
