import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ProfileInfoCardComponent } from './profile-info-card.component';

describe('ProfileInfoCardComponent', () => {
  let component: ProfileInfoCardComponent;
  let fixture: ComponentFixture<ProfileInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileInfoCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.card = {
      title: 'test_title',
      list: [{ label: 'test_label', type: 'input', value: 'test_value' }],
      summary: 'test_summary',
    };

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
