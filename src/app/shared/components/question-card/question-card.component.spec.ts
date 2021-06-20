import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCardComponent } from './question-card.component';

describe('QuestionCardComponent', () => {
  let component: QuestionCardComponent;
  let fixture: ComponentFixture<QuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.question = {
      categories: [],
      difficulty: 1,
      id: '1',
      marks: 1,
      numberOfOptions: 1,
      order: 1,
      statement: 'test',
      subCategories: [],
      type: 'multiple_correct',
      explanation: 'test_explanation',
      options: [],
    };
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
