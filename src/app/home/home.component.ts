import { Component, OnDestroy, OnInit } from '@angular/core';
import { count, first, interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubcription: Subscription;
  constructor() {}

  ngOnInit() {
    // this.firstObsSubcription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObservable = new Observable((observer) => {
      setInterval(() => {
        let count = 0;
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('count is greater than 3'));
        }
        count++;
      }, 1000);
    });
    this.firstObsSubcription = customIntervalObservable.subscribe((data) => {
      console.log(data);
    });
  }
  ngOnDestroy(): void {
    this.firstObsSubcription.unsubscribe();
  }
}
