import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  @ViewChild('chartTarget') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;


  ngAfterViewInit() {
    const options: Highcharts.Options = {
      chart: {
        type: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
      },
      title: {
        text: '',
        verticalAlign: 'middle',
        floating: true
      },
      xAxis: {
        categories: [
          '',
          '',
          '',
          '',
          ''
        ], gridLineWidth: 0,
        minorGridLineWidth: 0,
        lineWidth: 0,
        minorTickLength: 0,
        tickLength: 0,
        title: {
          text: '',
          align: 'low'
        },
        labels:
        {
          enabled: false
        }
        // crosshair: true
      },
      yAxis: {
        min: 0,
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        title: {
          text: '',
          align: 'low'
        },
        labels:
        {
          enabled: false
        }
      },
      legend: {
        enabled: false
      },

      credits: {
        enabled: false
      },
      tooltip: {
        enabled: false,
      },
      colors: ['#28a745'],
      series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4]

      }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5]

      }, {
        name: 'London',
        data: [48.9, 38.8, 39.3]

      }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5]

      }]
    }

    this.chart = chart(this.chartTarget.nativeElement, options);
  };
  constructor() { }

  ngOnInit() {
  }

}
