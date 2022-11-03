import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showSecret = false;
  count = 0;
  secrets = [];
  onClick() {
    this.showSecret = !this.showSecret;
    this.secrets.push(Date());
    this.count += 1;
  }
  getColor() {
    if (this.count >= 5) {
      return "blue";
    }
  }
}
