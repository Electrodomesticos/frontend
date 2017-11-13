import { Component, OnInit } from '@angular/core';


@Component({
 
    selector: 'circle-comp',
    templateUrl: 'circle.component.html',
    styleUrls: ['./circle.component.css']
})

export class CircleComponent {
    
    public width = 100;
    public height =100;
    

    test(){

       this.width = 120; 
       this.height = 120; 
    }

}
