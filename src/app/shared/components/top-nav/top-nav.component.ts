import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent {
  @Output() toggleSideNav = new EventEmitter<void>();

  onToggleMenu() {
    this.toggleSideNav.emit();
  }
}
