import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSelectorCardComponent } from './account-selector-card.component';

describe('AccountSelectorCardComponent', () => {
  let component: AccountSelectorCardComponent;
  let fixture: ComponentFixture<AccountSelectorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSelectorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSelectorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
