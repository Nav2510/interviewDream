import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() name: string;
  @Input() online: boolean;
  @Input() large: boolean = false;

  transform(name: string): string {
    const nameList = name?.split(' ');
    const twoCharacter = 2;
    if (nameList?.length === 1) {
      return nameList[0][0].toUpperCase();
    } else if (nameList?.length === twoCharacter) {
      return nameList[0][0].toUpperCase() + nameList[1][0].toUpperCase();
    }
  }

  getClass(): string {
    const numberOfClasses = 9;
    const color = Math.floor(this.name?.length % numberOfClasses);
    let classString = `class${color}`;
    if (this.large) {
      classString = `large class${color}`;
    }
    return classString;
  }
}
