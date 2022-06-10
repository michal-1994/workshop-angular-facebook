import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeystrokesPanelComponent } from './keystrokes-panel.component';

describe('KeystrokesPanelComponent', () => {
  let component: KeystrokesPanelComponent;
  let fixture: ComponentFixture<KeystrokesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeystrokesPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeystrokesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
