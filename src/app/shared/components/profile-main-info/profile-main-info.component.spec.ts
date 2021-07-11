import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ProfileMainInfoComponent } from './profile-main-info.component';

describe('ProfileMainInfoComponent', () => {
  let component: ProfileMainInfoComponent;
  let fixture: ComponentFixture<ProfileMainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileMainInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
