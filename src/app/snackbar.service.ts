import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  snackbarSubject: Subject<Object> = new Subject();

  constructor() { }

  open(message: string, color: string, showSnackbar: boolean) {
    this.snackbarSubject.next({ message: message, color: color, showSnackbar: showSnackbar });
    

  }
}
