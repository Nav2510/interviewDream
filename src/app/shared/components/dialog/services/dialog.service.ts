import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dataSource: { [key: string]: any } = {};

  private readonly dataSource$ = new BehaviorSubject<{ [key: string]: any }>(
    this.dataSource,
  );
  readonly submitClicked$ = new EventEmitter<void>();
  readonly cancelClicked$ = new EventEmitter<void>();

  get data$(): any {
    return this.dataSource$.asObservable();
  }

  submit(key?: string, passedData?: any): void {
    if (key) {
      this.dataSource[key] = passedData;
      this.dataSource$.next(this.dataSource);
    }
    this.submitClicked$.emit();
  }

  cancel(): void {
    this.cancelClicked$.emit();
  }
}
