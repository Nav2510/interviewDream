import { Component, Input } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

import { IProfileInfoCardModel } from '../../models/profile-info-card.model'

@Component({
  selector: 'app-profile-info-card',
  templateUrl: './profile-info-card.component.html',
  styleUrls: ['./profile-info-card.component.scss'],
})
export class ProfileInfoCardComponent {
  @Input() card: IProfileInfoCardModel

  editMode = false
  model: FormGroup

  onEdit() {
    this.editMode = !this.editMode
    if (this.editMode) {
      this.buildForm()
    }
  }

  buildForm() {
    const formObj = {}
    this.card.list.forEach((config) => {
      formObj[config.label] = new FormControl(config.value)
    })
    this.model = new FormGroup(formObj)
  }

  onSubmit() {
    this.editMode = false
  }
}
