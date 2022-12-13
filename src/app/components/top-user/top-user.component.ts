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
    this.users = [
      { user: "Edenfieldf150", username: "Edenfieldf150", photo: "https://h4cstatic1.s3.amazonaws.com/photos/9748/1634693342_b90c4f5b-3ef3-476a-afca-b5039283cb51_DA24AC54-A065-4C4B-A15C-B379C3FDC531.jpeg", age: 25, url: "/app/users/Edenfieldf150", activities: ["Hunting","Fishing","Camping"]},
      { user: "RainyDayPorchSittin", username: "RainyDayPorchSittin", photo: "https://h4cstatic1.s3.amazonaws.com/photos/4567/1596951663_9c3af283-f3ec-452c-999d-c9b97c34db08_e6929b62-cdd2-4f51-a257-f9e04d837d23.jpg", age: 35, url: "/app/users/RainyDayPorchSittin", activities: ["Hiking","Archery","Swimming"]},
      { user: "Hunterhance", username: "Hunterhance", photo: "https://h4cstatic1.s3.amazonaws.com/photos/763/1567533112_e03b35c2-7c8c-4094-8f60-694726b91056_B5CDEB39-FC6D-4D3C-8648-633407CE3CC5.jpeg", age: 22, url: "/app/users/Hunterhance", activities: ["Exercising","Camping","Hunting"]},
      { user: "Chris", username: "Chris", photo: "https://h4cstatic1.s3.amazonaws.com/photos/669/1566493338_65d335fb-fc79-48de-afb0-bb3844e36278_8A18BBEB-748B-4861-8A0F-F2D017481F7B.jpeg", age: 41, url: "/app/users/Chris", activities: ["Sightseeing","Biking","Hunting"]},
    ]
    /*this.homeService.getTopUsers().subscribe({
      next: response => {
        this.users = response
      },
      error: error => {
        console.log(error)
      }
    })*/
  }

}
