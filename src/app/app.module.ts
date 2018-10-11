import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContextMenuModule } from 'ngx-contextmenu';
import { DndModule } from 'ngx-drag-drop';
//import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { DashboardCircleProgressComponent } from './dashboard/dashboard-circle-progress/dashboard-circle-progress.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DashboardChartsComponent } from './dashboard/dashboard-charts/dashboard-charts.component';
import { HomeComponent } from './dashboard-2/home/home.component';
import { ProgressBarComponent } from './dashboard-2/progress-bar/progress-bar.component';
import { TabHistoryComponent } from './dashboard-2/tab-history/tab-history.component';
import { ItemListComponent } from './dashboard-2/item-list/item-list.component';
import { BarGraphComponent } from './dashboard-2/bar-graph/bar-graph.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { DragndropComponent } from './dashboard/dragndrop/dragndrop.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardHomeComponent,
    DashboardCardComponent,
    DashboardCircleProgressComponent,
    DashboardChartsComponent,
    HomeComponent,
    ProgressBarComponent,
    TabHistoryComponent,
    ItemListComponent,
    BarGraphComponent,
    NavbarComponent,
    DragndropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 80,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    NgbModule,
    ContextMenuModule.forRoot(),
    DndModule,
    //FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
