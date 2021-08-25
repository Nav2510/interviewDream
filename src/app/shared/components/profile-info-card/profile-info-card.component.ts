import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ProfileInfoCardModel } from './profile-info-card.model';

@Component({
  selector: 'app-profile-info-card',
  templateUrl: './profile-info-card.component.html',
  styleUrls: ['./profile-info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInfoCardComponent implements OnInit {
  @Input() card: ProfileInfoCardModel;
  @Input() showEdit: boolean;

  edit = false;
  model: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  onEdit(): void {
    this.edit = !this.edit;
    if (this.edit) {
      this.buildForm();
    }
  }

  buildForm(): void {
    const formObj = {};
    if (this.card.summary) {
      // eslint-disable-next-line dot-notation
      formObj['summary'] = new FormControl(this.card.summary);
    }
    if (this.card.list) {
      this.card.list.forEach((config) => {
        formObj[config.label] = new FormControl(config.value);
      });
    }
    this.model = new FormGroup(formObj);
  }

  onSubmit(): void {
    console.log('submit');
    this.edit = false;
  }

  onCancel(): void {
    console.log('cancel');
    this.edit = false;
  }
}
