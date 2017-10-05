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


  ngOnInit() {
  

  //this.loadOutlets(this.room);
  }

}
