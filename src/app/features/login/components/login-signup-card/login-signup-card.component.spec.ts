import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupCardComponent } from './login-signup-card.component';

describe('LoginSignupCardComponent', () => {
  let component: LoginSignupCardComponent;
  let fixture: ComponentFixture<LoginSignupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSignupCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
