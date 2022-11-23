import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectValue = 'Recipes';
  onNavigate(select: string) {
    this.selectValue = select;
  }
}
