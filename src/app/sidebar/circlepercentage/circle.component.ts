import { Component, OnInit, Input } from '@angular/core';
import { UserService }  from '../../ladp/user.service';


@Component({
 
    selector: 'circle-comp',
    templateUrl: 'circle.component.html',
    styleUrls: ['./circle.component.css']
})



export class CircleComponent {
    @Input() percentage: Number ;
    
    private prueba : Number;

    public width = 100;
    public height = this.prueba;
    
    constructor(private userService: UserService){
    this.prueba = this.userService.getPercentage()
    }
    test(){

       this.width = 120; 
       this.height = Number(this.percentage); 
    
    }

}
