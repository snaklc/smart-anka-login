import { Component, OnInit } from '@angular/core';
import { TokenStoreManagerService } from '../token-store-manager/token-store-manager.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  information;
  username;
  constructor(private token: TokenStoreManagerService) { }

  ngOnInit(): void {
    this.information = this.token.getUserInformation();
    this.username = this.information.user_name;
  }



}
