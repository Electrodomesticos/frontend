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
  tempData = new Room;


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


createRoom(room: Room) {
  this.roomService.setRooms(room).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido'), ()=>this.loadRooms());
  
}

updateRoom(name){
  console.log("Antes", this.tempData)
  this.tempData.name=name.name;
  console.log("Despues",this.tempData)
  this.roomService.updateRoom(this.tempData).subscribe(
    data => console.log('espacio para un alert', data),
    error => console.error('espacio para un alert fallido'), ()=>this.loadRooms());
}
deleteRoom(room) {
  this.roomService.deleteRoom(room.id)
  .subscribe(
    data => {'espacio para un alert'},
    //error => {this.modal.open()},
    error => {'espacio para un alert fallido'},
    ()=>this.loadRooms()
    ); 
}





ngOnInit() {
  this.loadRooms();
}
 
}
