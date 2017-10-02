import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';




import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { RoomsComponent } from './Components/rooms/rooms.component';

import { RoomsService } from './Services/rooms/rooms.service';


///
//import { ProjectListComponent } from './project/project-list.component';
//import { ProjectShowComponent } from './project/project-show.component';
//import { ProjectNewComponent } from './project/project-new.component';

//COMPONENTS
import { HomepageComponent } from './homepage/homepage.component';
import { AuthLinksComponent } from './authentication/auth-links.component';
//

//MODULO
import { SharedModule }         from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';

//SERVICIOS 
import { Angular2TokenService } from 'angular2-token';
import { LoggedInGuard } from './authentication/logged-in-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    RoomsComponent,
////
    HomepageComponent,
    AuthLinksComponent
    //
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    HttpModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'}),
    AuthenticationModule

  ],
  providers: [
    RoomsService,
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
