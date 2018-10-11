import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    dummy = [{ a: 'bbb' }, { a: 'ccc' }, { a: 'bbbb' }]

    cards = [{
        "icon": "pets",
        "number": "5407",
        "text": "Active Items",
        "progressValue": 55
    },
    {
        "icon": "shopping_cart",
        "number": "78464",
        "text": "Items sold",
        "progressValue": 70
    },
    {
        "icon": "home",
        "number": "$80.564",
        "text": "Income",
        "progressValue": 40
    },
    {
        "icon": "label",
        "number": "59",
        "text": "Tickets clsoed",
        "progressValue": 30
    },
    {
        "icon": "schedule",
        "number": "359",
        "text": "Total users",
        "progressValue": 77
    },
    {
        "icon": "supervisor_account",
        "number": "$780.564",
        "text": "Total income",
        "progressValue": 57
    },]

    itemList = [1, 2, 3, 4, 5, 6];
    colors = ['#70b02b', '#85ce36', '#9ed85f']
    title = "Download \n Sales"
    innerSize = 75
    constructor() { }

    ngOnInit() {
    }

    clickedButton() {
        this.dummy.push({ a: "lll" })
    }


}
