import { Component, OnInit } from '@angular/core';
import { HouseholdAppliancesService } from '../../Services/household_appliances/household-appliances.service';
import { Household_appliance } from '../../Models/household_appliance';



@Component({
  selector: 'app-household-appliances',
  templateUrl: './household-appliances.component.html',
  styleUrls: ['./household-appliances.component.css']
})
export class HouseholdAppliancesComponent implements OnInit {

  appliances: Household_appliance[];
  appliance = new Household_appliance;
  tempData = new Household_appliance;
  selectedAppliance: Household_appliance;

  constructor(private appliancesService: HouseholdAppliancesService ) {

   }

   loadAppliances(): void {
    this.appliancesService.getAppliances()
        .subscribe(
          resApplianceData => this.appliances = resApplianceData,
            error => console.log("Error :: " + error)
        )
}

  ngOnInit() {
    this.loadAppliances();
  }

}
