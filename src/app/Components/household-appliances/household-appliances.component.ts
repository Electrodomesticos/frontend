import { Component, OnInit, OnChanges  } from '@angular/core';
import { HouseholdAppliancesService } from '../../Services/household_appliances/household-appliances.service';
import { CategoriesService } from '../../Services/categories/categories.service';
import { Household_appliance } from '../../Models/household_appliance';
import { Categorie } from '../../Models/categorie';



@Component({
  selector: 'app-household-appliances',
  templateUrl: './household-appliances.component.html',
  styleUrls: ['./household-appliances.component.css']
})
export class HouseholdAppliancesComponent implements OnInit, OnChanges {

  appliances: Household_appliance[];
  appliance = new Household_appliance;
  tempData = new Household_appliance;
  selectedAppliance: Household_appliance;
  category = new Categorie;

  constructor(private appliancesService: HouseholdAppliancesService, private categoriesService: CategoriesService ) {

   }

   loadAppliances(): void {
    this.appliancesService.getAppliances()
        .subscribe(
          resApplianceData => this.appliances = resApplianceData,
            error => console.log("Error :: " + error)
        )
}



guardarDatos(appliance){
  console.log("guardarDatos", appliance)
  this.tempData=appliance;

}

updateAppliance(appliance){
  console.log("Antes", this.tempData)
  this.tempData.name=appliance.name;
  this.tempData.electricity_use=appliance.electricity_use;
  console.log("Despues",this.tempData)
  this.appliancesService.updateAppliance(this.tempData).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido'), ()=>this.loadAppliances());
}

createAppliance(appliance: Household_appliance) {
  appliance.consumption = 0;
  this.appliancesService.setAppliance(appliance).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido'), ()=>this.loadAppliances());
  
}

deleteAppliance(appliance) {
  this.appliancesService.deleteAppliance(appliance.id)
  .subscribe(
    data => {'espacio para un alert'},
    //error => {this.modal.open()},
    error => {'espacio para un alert fallido'},
    ()=>this.loadAppliances()
    ); 
}

  ngOnInit() {
    this.loadAppliances();
    
  }

  ngOnChanges() {
    this.loadAppliances();
}

}
