import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public title = "My Angular Template";
  public isAuthenticated: boolean;

  constructor() {
    this.isAuthenticated = false;
  }

  login() {}

  logout() {}
}
