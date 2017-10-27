import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserService } from './ladp/user.service';
import { LoginComponent }          from './ladp/login.component';
import { LoggedInGuard } from './ladp/logged-in-guard.service'

//import { SignUpComponent }         from './ladp/sign-up.component';


///

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { RoomsComponent }   from './Components/rooms/rooms.component';
import { CategoriesComponent }   from './Components/categories/categories.component';
import { HouseholdAppliancesComponent }   from './Components/household-appliances/household-appliances.component';

import { ChartComponent }   from './dashboard/chart.component';

const routes: Routes = [
    
  { path: '', component: LoginComponent },
  { path: 'login', redirectTo: '/log-in' },
  { path: 'log-in', component: LoginComponent },
//   { path: 'sign-up', component: SignUpComponent },
//   { path: 'signup', redirectTo: '/sign-up' },

{
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoggedInGuard]
    
},
{
    path: 'user',
    component: UserComponent,    
    canActivate: [LoggedInGuard]
    
},
{
    path: 'table',
    component: TableComponent,
    canActivate: [LoggedInGuard]
    
},
{
    path: 'typography',
    component: TypographyComponent,
    canActivate: [LoggedInGuard]
    
},
{
    path: 'icons',
    component: IconsComponent,
    canActivate: [LoggedInGuard]
    
},
{
    path: 'maps',
    component: MapsComponent,
    canActivate: [LoggedInGuard]
},
{
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [LoggedInGuard]
    
},
{
    path: 'upgrade',
    component: UpgradeComponent,
    canActivate: [LoggedInGuard]
},
{
    path: 'rooms',
    component: RoomsComponent,
    canActivate: [LoggedInGuard]
    
},
//{
//    path: 'categories',
//    component: CategoriesComponent,
//    canActivate: [LoggedInGuard]
    
//S},
{
    path: 'appliances',
    component: HouseholdAppliancesComponent,
    canActivate: [LoggedInGuard]
    
},
{
    path: 'chart',
    component: ChartComponent,
    canActivate: [LoggedInGuard]
   
    
}
] 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}


