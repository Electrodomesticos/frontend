import { Component, OnChanges, Input } from '@angular/core';
import { CategoriesService } from '../../../Services/categories/categories.service';
import { Categorie } from '../../../Models/categorie';
import { Household_appliance } from '../../../Models/household_appliance';

@Component({
  selector: 'app-appliance-details',
  templateUrl: './appliance-details.component.html',
  styleUrls: ['./appliance-details.component.css']
})
export class ApplianceDetailsComponent implements OnChanges {

  //category: Categorie[];
  category = new Categorie;

  @Input() appliance: Household_appliance;

  
  

  constructor(private categoriesService: CategoriesService) { }

  loadCategory(appliance): void {
    if (appliance.category_id){
    console.log(appliance.category_id)
    console.log(appliance.name)
    this.categoriesService.getMyCategories(appliance.category_id)
        .subscribe(
          resCategoryData => this.category = resCategoryData,
            error => console.log("Error :: " + error)
        )
      }
      //console.log(this.category.name)
  }
/*
  loadCategories(): void {
    this.categoriesService.getCategories()
        .subscribe(
          resCategorieData => this.categories = resCategorieData,
            error => console.log("Error :: " + error)
        )
    }
*/

 

  ngOnChanges() {
    this.loadCategory(this.appliance);
    //this.loadCategories();
  }

}
