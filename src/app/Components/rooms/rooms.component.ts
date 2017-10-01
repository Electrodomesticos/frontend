import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../Services/rooms/rooms.service';
import { Room } from '../../Models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  
  rooms: Room[];
  room = new Room;
  tempData = new Room;

  constructor(private roomService: RoomsService) {
  }

  ngOnInit() {
    this.loadRooms();
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
 
}
