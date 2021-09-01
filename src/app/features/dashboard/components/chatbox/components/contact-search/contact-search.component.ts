import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';

import { RequestContactGQL } from '../../../../../../../graphql/documents/mutations/users/request-contact.graphql-gen';
import { FetchContactGQL } from '../../../../../../../graphql/documents/queries/users/fetch-contacts.graphql-gen';
import { User } from '../../../../../../../graphql/generated/graphql.types';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSearchComponent implements OnInit {
  contactControl = new FormControl();
  filteredOptions: Observable<User[]>;

  constructor(
    private readonly fetchContactGQL: FetchContactGQL,
    private readonly requestContactGQL: RequestContactGQL,
  ) {}

  ngOnInit() {
    const delayTime = 500;
    this.filteredOptions = this.contactControl.valueChanges.pipe(
      debounceTime(delayTime),
      catchError((error) => this.handleError(error)),
      switchMap((value) =>
        this.fetchContactGQL
          .fetch({ name: value })
          .pipe(map((response) => response.data.fetchUserByNameOrUsername)),
      ),
    );
  }

  handleError(error: any): Observable<never> {
    console.log(error);
    return throwError(error);
  }

  getContact(selectedUser: User): void {
    // TODO: Handle already error
    this.requestContactGQL
      .mutate({ id: selectedUser._id })
      .pipe(map((response) => response.data.requestContact))
      .subscribe((request) => {
        console.log(request);
      });
  }
}
