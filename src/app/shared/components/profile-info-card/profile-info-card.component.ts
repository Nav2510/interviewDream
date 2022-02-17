import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ProfileInfoCardModel } from './profile-info-card.model';

@Component({
  selector: 'app-profile-info-card',
  templateUrl: './profile-info-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInfoCardComponent implements OnInit {
  @Input() card: ProfileInfoCardModel;
  @Input() showEdit: boolean;

  @Output() save = new EventEmitter<{
    [key: string]: { [key: string]: any };
  }>();

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
    if (this.card?.summary) {
      // eslint-disable-next-line dot-notation
      formObj['summary'] = new FormControl(this.card.summary);
    }
    if (this.card?.list) {
      this.card.list.forEach((config) => {
        formObj[config.label] = new FormControl(config.value);
      });
    }
    this.model = new FormGroup(formObj);
  }

  onSubmit(): void {
    const output = {};
    output[this.card.title] = this.model.value;
    this.edit = false;
    this.save.emit(output);
  }

  onCancel(): void {
    this.edit = false;
  }
}
