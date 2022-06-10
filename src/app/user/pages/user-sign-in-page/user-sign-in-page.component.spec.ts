import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UserSignInPageComponent } from './user-sign-in-page.component';

describe('UserSignInPageComponent', () => {
  let component: UserSignInPageComponent;
  let fixture: ComponentFixture<UserSignInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignInPageComponent ],
      imports: [
          FormsModule,
          RouterTestingModule
      ]
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
