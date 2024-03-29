import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { InfoCardComponent } from './info-card.component';

describe('InfoCardComponent', () => {
  let component: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.cardInfo = {
      description: 'test_description',
      difficulty: 1,
      label: 'test_label',
      numberOfQuestions: 1,
      tags: [],
      maxScore: 0,
      maxTime: 1,
    };
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
