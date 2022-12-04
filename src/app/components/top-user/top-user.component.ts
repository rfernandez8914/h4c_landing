import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HomeService } from 'src/app/services/home.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-user',
  templateUrl: './top-user.component.html',
  styleUrls: ['./top-user.component.css']
})
export class TopUserComponent implements OnInit {
  users: User[] | undefined
  url_page: string = environment.url
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getTopUsers().subscribe({
      next: response => {
        this.users = response
      },
      error: error => {
        console.log(error)
      }
    })
  }

}
