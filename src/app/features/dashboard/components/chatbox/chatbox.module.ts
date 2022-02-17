import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';

import { ChatboxComponent } from './chatbox.component';
import { ContactSearchComponent } from './components/contact-search/contact-search.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AvatarModule } from '../../../../shared/components/avatar/avatar.module';
import { MessagesAreaComponent } from './components/messages-area/messages-area.component';

const routes: Routes = [
  {
    path: '',
    component: ChatboxComponent,
  },
];

const MATERIALS = [
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
];

@NgModule({
  declarations: [
    ChatboxComponent,
    ContactListComponent,
    ContactSearchComponent,
    MessagesAreaComponent,
  ],
  imports: [
    AvatarModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ...MATERIALS,
  ],
})
export class ChatboxModule {}
