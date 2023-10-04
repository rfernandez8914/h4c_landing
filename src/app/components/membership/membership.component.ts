import { Component, OnInit } from '@angular/core';
import { Membership } from 'src/app/models/membership';
import { TokenPrice } from 'src/app/models/token-price';
import { HomeService } from 'src/app/services/home.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  memberships: Membership[] = []
  tokenPrice: TokenPrice[] = []
  url = environment.url_api
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getUserPackage().subscribe({
      next: response => {
        this.memberships = response.memberships
        this.tokenPrice = response.tokens
      },
      error: error => {
        console.log(error)
      }
    })
  }

}
