import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.css']
})
export class DashboardChartsComponent implements OnInit {
  @ViewChild('dashboardChart') dashboardChart: ElementRef;
  @Input() chartType;
  chart: Highcharts.ChartObject;
  constructor() { }

  ngAfterViewInit() {

    const options: Highcharts.Options = {
      chart: {
        type: this.chartType
      },
      title: {
        text: 'Monthly Average Temperature'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Temperature'
        },
        labels: {
          formatter: function () {
            return this.value + '°';
          }
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 7,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      colors: ['#ed645e', '#424e68'],
      series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
          y: 26.5,
        }]

      }, {
        name: 'London',
        data: [{ y: 3.9 }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6]
      }],

    }
    this.chart = chart(this.dashboardChart.nativeElement, options);
  }

  ngOnInit() {
  }

}
