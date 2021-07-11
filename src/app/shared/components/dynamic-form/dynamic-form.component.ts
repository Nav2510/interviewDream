import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from 'events';

import { ConfigModel } from './config.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
  @Input() config: ConfigModel[];

  @Output() formSubmit = new EventEmitter();

  model: FormGroup;

  ngOnInit() {
    if (this.config) {
      this.build();
    }
  }

  build() {
    const formObj = {};

    this.config.forEach((config: ConfigModel) => {
      if (config.type !== 'button') {
        formObj[config.name] = new FormControl(config.defaultValue);
      }
    });
    this.model = new FormGroup(formObj);
  }

  onSubmit() {
    this.formSubmit.emit(this.model.value);
  }
}
