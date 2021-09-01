import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { ChatboxComponent } from './chatbox.component';
import { ContactSearchComponent } from './components/contact-search/contact-search.component';
import { MatMenuModule } from '@angular/material/menu';
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
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatMenuModule,
  MatAutocompleteModule,
];

@NgModule({
  declarations: [
    ChatboxComponent,
    ContactSearchComponent,
    ContactListComponent,
    MessagesAreaComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    ReactiveFormsModule,
    FormsModule,
    ...MATERIALS,
    RouterModule.forChild(routes),
  ],
})
export class ChatboxModule {}
