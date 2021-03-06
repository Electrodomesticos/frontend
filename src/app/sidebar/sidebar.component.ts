import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { UserService }  from '../ladp/user.service';
import { SideService }  from './sidebar.service';



declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'rooms', title: 'Habitaciones', icon:'ti-home', class: ''},
    { path: 'appliances', title: 'Electrodomésticos', icon:'ti-desktop', class: ''},
    { path: 'categories', title: 'Categorias', icon:'ti-direction-alt', class: ''},
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
//     { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
//     //{ path: 'table', title: 'Table List',  icon:'ti-view-list-alt', class: '' },
//    //{ path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
//     { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
//     //{ path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
//     { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})



export class SidebarComponent implements OnInit {
    public menuItems: any[];
    private _percentage : Number;
    private data : boolean = true;
    private render = true;

    constructor(private cdRef:ChangeDetectorRef, private userService : UserService, private sideService : SideService){


    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
      
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

    isLoggedIn(a=true): boolean {
  
        //console.log("sidebar", this.service.isLoggedIn())

        return (this.userService.isLoggedIn() && a);
        //return false
      }

        test(){
            
       
        
                this.isLoggedIn(false)
                this.cdRef.detectChanges();
                
            
        }
 

    

}
