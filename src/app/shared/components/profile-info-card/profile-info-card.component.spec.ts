import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoCardComponent } from './profile-info-card.component';

describe('ProfileInfoCardComponent', () => {
  let component: ProfileInfoCardComponent;
  let fixture: ComponentFixture<ProfileInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
