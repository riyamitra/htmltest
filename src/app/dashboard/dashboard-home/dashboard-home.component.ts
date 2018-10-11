import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  colors = ['#f44236', '#434d66', '#a6a6a6', '#4db151']
  title = "Users"
  innerSize = 60
  cards = [
    {
      "color": "#f44236",
      "icon": "swap_vert",
      "icon_color": "#fe9486",
      "number": "84,198",
      "text": "REVENUE"
    },
    {
      "color": "#ff9801",
      "icon": "shopping_cart",
      "icon_color": "#ffc161",
      "number": "36,540",
      "text": "SALES"
    },
    {
      "color": "#2297f7",
      "icon": "equalizer",
      "icon_color": "#76bdf5",
      "number": "24,225",
      "text": "PRODUCTS"
    },
    {
      "color": "#4db151",
      "icon": "people",
      "icon_color": "#9de09b",
      "number": "88,658",
      "text": "VISITS"
    }
  ]

  circleProgress = [
    {
      "color": "#4285f4",
      "percentage": "82",
      "text": "PROFIT"
    },
    {
      "color": "#d40000",
      "percentage": "46",
      "text": "NO. OF VISITS"
    },
    {
      "color": "#00bcd4",
      "percentage": "84",
      "text": "CUSTOMERS"
    },
    {
      "color": "#f1eb0e",
      "percentage": "55",
      "text": "SALES"
    }
  ]
  constructor() { }

  ngOnInit() {
    console.log('dashboard 1 being called');

  }
}


