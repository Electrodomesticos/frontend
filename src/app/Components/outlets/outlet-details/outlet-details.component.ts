import { Component, OnChanges, Input } from '@angular/core';
import { Outlet } from '../../../Models/outlet';
import { OutletsService } from '../../../Services/outlets/outlets.service';
import { Household_appliance } from '../../../Models/household_appliance';
import { HouseholdAppliancesService } from '../../../Services/household_appliances/household-appliances.service';

@Component({
  selector: 'app-outlet-details',
  templateUrl: './outlet-details.component.html',
  styleUrls: ['./outlet-details.component.css']
})
export class OutletDetailsComponent implements OnChanges {

  appliance = new Household_appliance;
  selAppliance = new Household_appliance;
  appliances: Household_appliance[];
  
  

  @Input() outlet: Outlet;

  constructor(private outletService: OutletsService, private appliancesService: HouseholdAppliancesService) { }

  loadMyAppliance(outlet): void {    
    this.outletService.getMyAppliance(outlet.id)
        .subscribe(
          resApplianceData => this.appliance = resApplianceData,
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


  updateAppliance(){
    this.selAppliance.outlet_id=this.outlet.id;
    
    console.log("Antes", this.selAppliance)
    console.log("outletid", this.outlet.id)
    this.appliancesService.updateAppliance(this.selAppliance).subscribe(
      data => console.log('espacio para un alert', data),
      error => console.error('espacio para un alert fallido'), ()=>this.loadMyAppliance(this.outlet));
  }

  unplug(appliance){
    appliance.outlet_id=null;
    
    this.appliancesService.updateAppliance(appliance).subscribe(
      data => console.log('espacio para un alert', data),
      error => console.error('espacio para un alert fallido'), ()=>this.loadMyAppliance(this.outlet));
  }


  ngOnChanges() {
    
    this.loadMyAppliance(this.outlet)
    this.loadAppliances()
  }

}
