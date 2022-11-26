import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  public room = new Room();

  constructor(private _roomService: RoomsService, private _router: Router) { }

  ngOnInit(): void {

  }

  addRoom() {
    console.log(this.room);
    this.room.status = "vacant";
    console.log(this.room);
    this._roomService.addRoom(this.room).subscribe(room => {
      
      if(room) {
        console.log("Room Added Successfully");
        console.log(room);
        this._router.navigateByUrl('/vacant-rooms');
      }
    })
  }

}
