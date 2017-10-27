import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2OdometerModule } from 'ng2-odometer'; // <-- import the module


import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';

import { BsModalModule } from 'ng2-bs3-modal';
import { Angular2TokenService } from 'angular2-token';
import { SharedModule }         from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationModule2 } from './ladp/authentication.module';

import { AuthLinksComponent } from './authentication/auth-links.component';



import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';


import { ChartModule } from 'angular2-highcharts';
import { ChartComponent }   from './dashboard/chart.component';
import { ChartService }   from './dashboard/chart.service';
import { OdometerComponent }   from './dashboard/odometer.component';


import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { RoomsComponent } from './Components/rooms/rooms.component';
import { OutletsComponent } from './Components/outlets/outlets.component';
import { HouseholdAppliancesComponent } from './Components/household-appliances/household-appliances.component';

import { RoomsService } from './Services/rooms/rooms.service';
import { OutletsService } from './Services/outlets/outlets.service';
import { HouseholdAppliancesService } from './Services/household_appliances/household-appliances.service';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CategoriesService } from './Services/categories/categories.service';


import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';

import { UserService } from './ladp/user.service';
import { LoginComponent }          from './ladp/login.component';


import { LoggedInGuard } from './ladp/logged-in-guard.service'


export function highchartsFactory() {
  return highcharts;
}
@NgModule({
  declarations: [
    AppComponent,
    AuthLinksComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    RoomsComponent,
    OutletsComponent,
    HouseholdAppliancesComponent,
    CategoriesComponent,
    ChartComponent,
    OdometerComponent
    //,LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    AuthenticationModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    HttpModule,
    BsModalModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'}),
    ChartModule,
    Ng2OdometerModule.forRoot(),
    AuthenticationModule2

  ],
  providers: [
    UserService,
    Angular2TokenService,
    RoomsService,
    OutletsService,
    CategoriesService,
    HouseholdAppliancesService,
    { provide: HighchartsStatic, 
      useFactory: highchartsFactory
    },
    ChartService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
