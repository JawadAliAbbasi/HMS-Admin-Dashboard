import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantRoomsComponent } from './vacant-rooms.component';

describe('VacantRoomsComponent', () => {
  let component: VacantRoomsComponent;
  let fixture: ComponentFixture<VacantRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacantRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacantRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
