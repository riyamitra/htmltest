import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-circle-progress',
  templateUrl: './dashboard-circle-progress.component.html',
  styleUrls: ['./dashboard-circle-progress.component.css']
})
export class DashboardCircleProgressComponent implements OnInit {
  @Input() circle;
  constructor() { }

  ngOnInit() {
  }

}
