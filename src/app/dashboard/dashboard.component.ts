import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    @ViewChild('chartTarget') chartTarget: ElementRef;
    chart: Highcharts.ChartObject;
    @Input() colors;
    @Input() title;
    @Input() innerSize;
    ngAfterViewInit() {

        const options: Highcharts.Options = {
            chart: {
                renderTo: 'container',
                type: 'pie'
            },
            title: {
                text: this.title,
                verticalAlign: 'middle',
                floating: true
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            colors: this.colors,
            plotOptions: {
                series: {
                    allowPointSelect: true
                },
                pie: {
                    shadow: false, showInLegend: false,
                    dataLabels: {
                        enabled: false,
                    }
                }
            },
            tooltip: {
                enabled: false,
            },
            series: [{

                name: 'Browsers',
                data: [["Firefox", 30], ["MSIE", 30], ["Chrome", 40]],
                size: '60%',
                innerSize: this.innerSize + '%',

            }],

        };
        console.log(options.series);
        this.chart = chart(this.chartTarget.nativeElement, options);
    }

    addSeries() {
        this.chart.addSeries({
            name: 'Balram',
            data: [2, 3, 7]
        })
    }
    ngOnInit() { }
}