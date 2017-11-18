import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { CircleComponent } from './circlepercentage/circle.component';
import { SideService } from './sidebar.service'




@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarComponent, CircleComponent ],
    exports: [ SidebarComponent ],
    providers : [ SideService ]
})

export class SidebarModule {}
