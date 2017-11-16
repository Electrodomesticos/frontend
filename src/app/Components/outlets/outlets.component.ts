import { Component, OnChanges, Input } from '@angular/core';
import { OutletsService } from '../../Services/outlets/outlets.service';
import { Outlet } from '../../Models/outlet';
import { Room } from '../../Models/room';
import { Household_appliance } from '../../Models/household_appliance';
import { HouseholdAppliancesService } from '../../Services/household_appliances/household-appliances.service';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.css']
})
export class OutletsComponent implements OnChanges {

  outlets: Outlet[];
  tempData = new Outlet;
  tempDataA = new Household_appliance;
  appliances: Household_appliance[];
  appliance = new Household_appliance;
  selectedAppliance: Household_appliance;

  selAppliance = new Household_appliance;

  @Input() room: Room;
  
  //room_id = this.room.id;
  //test = this.room.getId();


 nOutlet = new Outlet;

  constructor(private outletService: OutletsService, private appliancesService: HouseholdAppliancesService) { }

  loadOutlets(room): void {
    this.outletService.getOutlets(room.id)
        .subscribe(
          resRoomData => this.outlets = resRoomData,
            error => console.log("Error :: " + error)
        )
}

loadAppliances(): void {
  this.appliancesService.getAppliances()
      .subscribe(
        resApplianceData => this.appliances = resApplianceData,
          error => console.log("Error :: " + error)
      )
}
loadMyAppliance(outlet): void {
  this.outletService.getMyAppliance(outlet.id)
      .subscribe(
        resApplianceData => this.appliance = resApplianceData,
          error => console.log("Error :: " + error)
      )
}

  updateAppliance(){
  this.selAppliance.outlet_id=this.tempData.id;
  
  console.log("Antes", this.selAppliance)
  console.log("outletid", this.tempData.id)
  this.appliancesService.updateAppliance(this.selAppliance).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido'), ()=>this.loadAppliances());
}

guardarDatos(outlet){
  console.log("guardarDatos", outlet)
  this.tempData=outlet;

}

guardarDatosA(appliance){
  console.log("guardarDatos", appliance)
  this.tempData=appliance;

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
    data => this.function(),
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

function(){


}


  ngOnChanges() {
  

  this.loadAppliances();
  this.loadOutlets(this.room)
  this.loadMyAppliance(this.tempData)
  }

}
