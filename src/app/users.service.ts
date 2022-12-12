import { Injectable } from "@angular/core";
import { CountService } from "src/count.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  constructor(private counterService: CountService) {}
  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }
}
