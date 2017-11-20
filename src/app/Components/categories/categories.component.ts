import { Component, OnInit, OnChanges} from '@angular/core';
import { CategoriesService } from '../../Services/categories/categories.service';
import { HouseholdAppliancesService } from '../../Services/household_appliances/household-appliances.service';
import { Categorie } from '../../Models/categorie';
import { Household_appliance } from '../../Models/household_appliance';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnChanges{
	categories: Categorie[];
  	categorie = new Categorie;
  	tempData = new Categorie;
    selectedCategorie: Categorie;
    appliances: Household_appliance[];
    appliancesB: Household_appliance[];
    selAppliance = new Household_appliance;

  constructor(private categoriesService: CategoriesService, private appliancesService: HouseholdAppliancesService) { }

  loadCategories(): void {
    this.categoriesService.getCategories()
        .subscribe(
          resCategorieData => this.categories = resCategorieData,
            error => console.log("Error :: " + error)
        )
    }
    guardarDatos(categorie){
 	console.log("guardarDatos", categorie)
  	this.tempData=categorie;
  }

  updateCategorie(categorie){
  console.log("Antes", this.tempData)
  this.tempData.name=categorie.name;
  console.log("Despues",this.tempData)
  this.categoriesService.updateCategorie(this.tempData).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido'), ()=>this.loadCategories());
}

createCategorie(categorie: Categorie) {
  this.categoriesService.setCategorie(categorie).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido'), ()=>this.loadCategories());
  
}

turnOn(category: Categorie){
  this.categoriesService.turnCategory(category.id,true).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido')
  )
}

turnOff(category: Categorie){
  this.categoriesService.turnCategory(category.id,false).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido')
  )
}

loadMyAppliances(categorie): void {
  this.categoriesService.getMyAppliances(categorie)
  .subscribe(
    resApplianceData => this.appliances = resApplianceData,
      error => console.log("Error :: " + error)
  )
}

loadMyAppliancesB(): void {
  this.appliancesService.getAppliancesB()
  .subscribe(
    resApplianceData => this.appliancesB = resApplianceData,
      error => console.log("Error :: " + error)
  )
}

deleteCategorie(categorie) {
  this.categoriesService.deleteCategorie(categorie.id)
  .subscribe(
    data => {'espacio para un alert'},
    //error => {this.modal.open()},
    error => {'espacio para un alert fallido'},
    ()=>this.loadCategories()
    ); 
}

updateAppliance(appliance){
  appliance.category_id=this.tempData.id;
  
  console.log("Antes", appliance)
  console.log("outletid", this.tempData.id)
  this.appliancesService.updateAppliance(appliance).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido'), ()=>this.loadMyAppliancesB());
}

deleteAppliance(appliance){
  appliance.category_id=null;
  
  console.log("Antes", appliance)
  console.log("outletid", this.tempData.id)
  this.appliancesService.updateAppliance(appliance).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido'),()=>this.loadMyAppliances(this.tempData));
}

  ngOnInit() {
       this.loadCategories();
      
  }

  ngOnChanges() {
    
    this.loadMyAppliancesB();
    this.loadMyAppliances(this.tempData);
}

 

}
