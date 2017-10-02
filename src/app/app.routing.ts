import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { RoomsComponent }   from './Components/rooms/rooms.component';

//NUEVAS RUTAS
import { HomepageComponent } from './homepage/homepage.component';
import { LoggedInGuard } from './authentication/logged-in-guard.service';

//
export const AppRoutes: Routes = [
    {
        path: '',
//        redirectTo: 'dashboard',
//        pathMatch: 'full',
        redirectTo: 'homepage',
        pathMatch: 'full',


    },
    {
        path: 'homepage',
        component: HomepageComponent
    },


    //////
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    },
    {
        path: 'rooms',
        component: RoomsComponent
    }
]
