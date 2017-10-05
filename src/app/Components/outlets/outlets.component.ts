import { Component, OnInit, Input } from '@angular/core';
import { OutletsService } from '../../Services/outlets/outlets.service';
import { Outlet } from '../../Models/outlet';
import { Room } from '../../Models/room';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.css']
})
export class OutletsComponent implements OnInit {

  outlets: Outlet[];
  tempData = new Outlet;
  @Input() room: Room;
  //room_id = this.room.id;
  //test = this.room.getId();


 nOutlet = new Outlet;

  constructor(private outletService: OutletsService) { }

  loadOutlets(room): void {
    this.outletService.getOutlets(room.id)
        .subscribe(
          resRoomData => this.outlets = resRoomData,
            error => console.log("Error :: " + error)
        )
}

guardarDatos(outlet){
  console.log("guardarDatos", outlet)
  this.tempData=outlet;

}
/*
turnOutlet(outlet){
  console.log("Antes", this.tempData)
  if(this.tempData.estate==true){
    this.tempData.estate=false;
    console.log("Despues",this.tempData)
  }
  else{
    this.tempData.estate=true;
    console.log("Despues",this.tempData)
  }
  this.outletService.updateOutlet(this.tempData).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido'));
}

*/
createOutlet(room: Room) {
  this.nOutlet.room_id = room.id;
  this.nOutlet.estate = false;
  this.outletService.setOutlets(this.nOutlet).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido'), ()=>this.loadOutlets(room));
  
}

turnOutlet(outlet: Outlet){
  
  if(outlet.estate==true){
     outlet.estate=false;
    
  }
  else{
    outlet.estate=true;
    
  }
  this.outletService.updateOutlet(outlet).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido'));
}

deleteOutlet(outlet) {
  this.outletService.deleteOutlet(outlet.id)
  .subscribe(
    data => {'espacio para un alert'},
    //error => {this.modal.open()},
    error => {'espacio para un alert fallido'},
    ); 
}


  ngOnInit() {
  

  //this.loadOutlets(this.room);
  }

}
