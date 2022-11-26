import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private baseUrl: string = "http://localhost:3000/";

  constructor(private _httpClient: HttpClient) { }

  getBookedRooms() {

    return this._httpClient.get(this.baseUrl + "booked-rooms");
  }

  getVacantRooms() {

    return this._httpClient.get(this.baseUrl + "vacant-rooms");
  }

  addRoom(room: Room) {

    return this._httpClient.post(this.baseUrl + "vacant-rooms", room);
  }

  bookRoom(room: Room) {
    
    return this._httpClient.patch(this.baseUrl + "vacant-rooms", room);
  }
}
