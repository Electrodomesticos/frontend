import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { OdometerService } from './odometer.service';

@Component({
    selector: 'odometer',
    styleUrls: ['odometer.component.css'],
    templateUrl: 'odometer.component.html'
})
export class OdometerComponent {
    public number: number = 0;
    public observable: Observable<boolean>;
    private observer: Observer<boolean>;

    public data: number;

    constructor(private odometerService : OdometerService) {
        this.observable = new Observable<boolean>((observer: any) => this.observer = observer).share();

        // For auto mode
       // setTimeout(() => this.number += this.number, 200); // Update on 5 seconds

    
      //// setTimeout(this.test(), 2000);
       setInterval(() => {
         //  this.number += Math.random(); 
           this.loadData();
         //  this.observer.next(true)
        }, 10000);

    }
    loadData() {
        this.odometerService.getData().subscribe(
          resAreaData => {
              this.number=resAreaData;}
        );
      }

}
