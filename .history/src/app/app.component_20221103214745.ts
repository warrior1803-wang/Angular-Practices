import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showSecret = false;
  secrets = [
    " my secret pleasure: listening to Peaches by Justin Bieber",
    "I like to smell my nails",
  ];
  onClick() {
    this.showSecret = !this.showSecret;
  }
}
