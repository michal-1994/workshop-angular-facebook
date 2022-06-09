import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignInPageComponent } from './user-sign-in-page.component';

describe('UserSignInPageComponent', () => {
  let component: UserSignInPageComponent;
  let fixture: ComponentFixture<UserSignInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignInPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSignInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
