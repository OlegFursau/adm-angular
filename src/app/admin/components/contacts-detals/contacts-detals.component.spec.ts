import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetalsComponent } from './contacts-detals.component';

describe('ContactsDetalsComponent', () => {
  let component: ContactsDetalsComponent;
  let fixture: ComponentFixture<ContactsDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsDetalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
