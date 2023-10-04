import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Testimonial } from '../models/testimonial';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  api_url: string = environment.url_api
  constructor(
    private http: HttpClient
  ) { }

  getTestimonials() {
    return this.http.get<Testimonial[]>(this.api_url + '/users/api/testimonial/home/')
  }

  getTopUsers() {
    return this.http.get<User[]>(this.api_url + '/users/api/topusers/home/')
  }

  getUserPackage(): Observable<any>{
    return this.http.get(this.api_url + '/users/api/userpackage')
  }
}
