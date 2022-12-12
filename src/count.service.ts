import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CountService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("Acitve to Inactive: " + this.activeToInactiveCounter);
  }
  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log("Inactive to Active: " + this.inactiveToActiveCounter);
  }

  constructor() {}
}
