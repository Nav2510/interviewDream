import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  @Output() toggleSideNav = new EventEmitter()

  onToggleMenu() {
    this.toggleSideNav.next()
  }
}
