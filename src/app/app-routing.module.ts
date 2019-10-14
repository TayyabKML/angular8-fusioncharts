import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FusionChartsComponent } from "angular-fusioncharts";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "fusioncharts",
    component: FusionChartsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
