import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../Services/rooms/rooms.service';
import { Room } from '../../Models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [RoomsService]
})
export class RoomsComponent implements OnInit {

  
  rooms: Room[];


  constructor(private roomService: RoomsService) {
  }

  

  /*  
  loadRooms() {
    this.roomService.getRooms().subscribe(
      resRoomData => {this.rooms = resRoomData;console.log('AREAS CARGADAS: ', resRoomData)}
    );
  }
 */
  loadRooms(): void {
    this.roomService.getRooms()
        .subscribe(
          resRoomData => this.rooms = resRoomData,
            error => console.log("Error :: " + error)
        )
}

ngOnInit() {
  this.loadRooms();
}
 
}
