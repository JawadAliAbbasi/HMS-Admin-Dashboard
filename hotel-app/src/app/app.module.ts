import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookedRoomsComponent } from './components/booked-rooms/booked-rooms.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { RouterModule, Routes } from '@angular/router';
import { VacantRoomsComponent } from './components/vacant-rooms/vacant-rooms.component';

const routes: Routes = [
  {path: 'booked-rooms', component: BookedRoomsComponent},
  {path: 'vacant-rooms', component: VacantRoomsComponent},
  {path: 'add', component: AddRoomComponent},
  {path: '', redirectTo: '/booked-rooms', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    BookedRoomsComponent,
    AddRoomComponent,
    VacantRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
