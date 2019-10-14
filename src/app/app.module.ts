import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

// Import angular-fusioncharts
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library
// import FusionCharts from "fusioncharts/core";

// // // Load FusionCharts Individual Charts
// import MsColumn2d from "fusioncharts/viz/mscolumn2d";
// import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// // // Use fcRoot function to inject FusionCharts library, and the modules you want to use
// FusionChartsModule.fcRoot(FusionCharts, MsColumn2d, FusionTheme);
// Load FusionCharts
import * as FusionCharts from "fusioncharts";
// Load Charts module
import * as Charts from "fusioncharts/fusioncharts.charts";
// Load fusion theme
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule,
} from "@angular/material";
import { HomeComponent } from "./home/home.component";
import { FusionchartsComponent } from "./fusioncharts/fusioncharts.component";
@NgModule({
  declarations: [AppComponent, HomeComponent, FusionchartsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FusionChartsModule, // Include in imports
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
