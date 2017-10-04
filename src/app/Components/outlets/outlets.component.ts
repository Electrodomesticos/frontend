import { Component, OnInit } from '@angular/core';
import { OutletsService } from '../../Services/outlets/outlets.service';
import { Outlet } from '../../Models/outlet';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.css']
})
export class OutletsComponent implements OnInit {

  outlets: Outlet[];

  constructor(private outletService: OutletsService) { }

  loadOutlets(room_id): void {
    this.outletService.getOutlets(room_id)
        .subscribe(
          resRoomData => this.outlets = resRoomData,
            error => console.log("Error :: " + error)
        )
}

  ngOnInit() {
  }

}
