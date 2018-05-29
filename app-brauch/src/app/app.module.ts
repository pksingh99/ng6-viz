;
import { ToolsComponent } from './pages/tools/tools.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { LoginComponent } from './pages/login/login.component';
import { MapchartComponent } from './shared/mapchart/mapchart.component';
import { 1x2Component } from './layout/1x2/1x2.component';
import { 2x1Component } from './layout/2x1/2x1.component'import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { VizComponent } from './pages/viz/viz.component';
import { BarchartComponent } from './shared/barchart/barchart.component';
import { PiechartComponent } from './shared/piechart/piechart.component';
import { LinechartComponent } from './shared/linechart/linechart.component';
import { SpiderchartComponent } from './shared/spiderchart/spiderchart.component';
import { ChronoComponent } from './utilities/chrono/chrono.component';
import { 4x4Component } from './layout/4x4/4x4.component';

@NgModule({
  declarations: [
    AppComponent,
    VizComponent,
    BarchartComponent,
    PiechartComponent,
    LinechartComponent,
    SpiderchartComponent,
    ChronoComponent,
    4x4Component, 2x1Component, 1x2Component, MapchartComponent, LoginComponent, LogoutComponent, AdminComponent, ToolsComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
