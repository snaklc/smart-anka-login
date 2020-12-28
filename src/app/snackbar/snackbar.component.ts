import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  message;
  color;
  show = false;

  constructor(private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.snackbarService.snackbarSubject.subscribe((result: { message: string, color: string, showSnackbar: boolean }) => {
      this.message = result.message;
      this.color = result.color;
      this.show = result.showSnackbar;

    })
  }


}
