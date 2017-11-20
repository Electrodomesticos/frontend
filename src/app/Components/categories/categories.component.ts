import { Component, OnInit} from '@angular/core';
import { CategoriesService } from '../../Services/categories/categories.service';
import { Categorie } from '../../Models/categorie';
import { Household_appliance } from '../../Models/household_appliance';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
	categories: Categorie[];
  	categorie = new Categorie;
  	tempData = new Categorie;
    selectedCategorie: Categorie;
    appliances: Household_appliance[];

  constructor(private categoriesService: CategoriesService) { }

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

loadMyAppliances(categorie): void {
  this.categoriesService.getMyAppliances(categorie)
  .subscribe(
    resApplianceData => this.appliances = resApplianceData,
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

  ngOnInit() {
  	   this.loadCategories();
  }

 

}
