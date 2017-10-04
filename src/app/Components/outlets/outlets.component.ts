import { Component, OnInit, Input } from '@angular/core';
import { OutletsService } from '../../Services/outlets/outlets.service';
import { Outlet } from '../../Models/outlet';
import { Room } from '../../Models/room';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.css']
})
export class OutletsComponent implements OnInit {

  outlets: Outlet[];
  @Input() room: Room;
  //room_id = this.room.id;
  //test = this.room.getId();

 

  constructor(private outletService: OutletsService) { }

  loadOutlets(room): void {
    this.outletService.getOutlets(room.id)
        .subscribe(
          resRoomData => this.outlets = resRoomData,
            error => console.log("Error :: " + error)
        )
}

  ngOnInit() {
  

  //this.loadOutlets(this.room);
  }

}
