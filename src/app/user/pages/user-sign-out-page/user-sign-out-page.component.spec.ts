import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignOutPageComponent } from './user-sign-out-page.component';

describe('UserSignOutPageComponent', () => {
  let component: UserSignOutPageComponent;
  let fixture: ComponentFixture<UserSignOutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignOutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSignOutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
