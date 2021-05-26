import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from 'events';
import { IConfigModel } from '../../models/filter-config.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();
  @Input() config: IConfigModel[];

  model: FormGroup;
  ngOnInit() {
    if (this.config) {
      this.build();
    }
  }

  build() {
    const formObj = {};
    this.config.forEach((config: IConfigModel) => {
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
