import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FusionchartsComponent } from "./fusioncharts/fusioncharts.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "fusioncharts",
    component: FusionchartsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
