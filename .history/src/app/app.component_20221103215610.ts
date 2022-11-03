import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showSecret = false;
  secrets = [];
  onClick() {
    this.showSecret = !this.showSecret;
    this.secrets.push(tim);
  }
}
