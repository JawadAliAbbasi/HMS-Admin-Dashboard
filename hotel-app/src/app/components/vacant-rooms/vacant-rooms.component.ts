import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-vacant-rooms',
  templateUrl: './vacant-rooms.component.html',
  styleUrls: ['./vacant-rooms.component.css']
})
export class VacantRoomsComponent implements OnInit {

  public rooms: any = [
    
  ]

  constructor(private _roomsService: RoomsService, private _router: Router) { }

  ngOnInit(): void {

    this._roomsService.getVacantRooms().subscribe(rooms => {
      console.log(rooms);
      this.rooms = rooms;
    });
  }

  bookRoom(room: Room) {

    console.log("yep");
    console.log(room);
    console.log("yep");

    this._roomsService.bookRoom(room).subscribe(room => {
      console.log("here");
      console.log(room);
      this._router.navigateByUrl('/booked-rooms');

    })
    
  }

}
