import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
    selector: 'odometer',
    styleUrls: ['odometer.component.css'],
    templateUrl: 'odometer.component.html'
})
export class OdometerComponent {
    public number: number = 0;
    public observable: Observable<boolean>;
    private observer: Observer<boolean>;

    constructor() {
        this.observable = new Observable<boolean>((observer: any) => this.observer = observer).share();

        // For auto mode
       // setTimeout(() => this.number += this.number, 200); // Update on 5 seconds

    
      // setTimeout(this.test(), 2000);
       setInterval(() => {this.number += Math.random(); this.observer.next(true)}, 2000);
     
       
    }

}
