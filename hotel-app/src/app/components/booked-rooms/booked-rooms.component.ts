import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.component.html',
  styleUrls: ['./booked-rooms.component.css']
})
export class BookedRoomsComponent implements OnInit {

  public rooms: any = [
 
  ]

  constructor(private _roomsService: RoomsService) { }

  ngOnInit(): void {

    this._roomsService.getBookedRooms().subscribe(rooms => {
      console.log(rooms);
      this.rooms = rooms;
    });
  }

}
