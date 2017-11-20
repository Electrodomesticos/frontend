import { Component, Input } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { OdometerService } from './odometer.service';

@Component({
    selector: 'odometer',
    styleUrls: ['odometer.component.css'],
    templateUrl: 'odometer.component.html'
})
export class OdometerComponent {
   // public number: number = 0;
    public observable: Observable<boolean>;
    private observer: Observer<boolean>;

    public data: number;
    @Input() number: number;
    @Input() config;
    constructor() {}


   
    

}
