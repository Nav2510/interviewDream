import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountSelectorCardComponent } from './account-selector-card.component';

describe('AccountSelectorCardComponent', () => {
  let component: AccountSelectorCardComponent;
  let fixture: ComponentFixture<AccountSelectorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSelectorCardComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
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
