import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url_api = environment.url_api
  constructor(
    public fb: FormBuilder
  ) {}

  registerForm = this.fb.group({
    gender: [''],
    seeking1: [false],
    seeking2: [false],
    min: [18],
    max: [55]
  })

  ngOnInit(): void {
  }

  register(): void{
    let seeking1 = ''
    let seeking2 = ''
    let parameters = ''
    //seeking1 = this.registerForm.controls['seeking1'].value == true ? 'M' : ''
    //seeking2 = this.registerForm.controls['seeking2'].value == true ? 'F' : ''
    if(this.registerForm.controls['gender'].value == 'M')
      seeking1 = 'F'
    else
      seeking1 = 'M'
    parameters = '?gender=' + this.registerForm.controls['gender'].value + '&seeking1=' + seeking1 + '&seeking2=' + seeking2 + '&min=' + this.registerForm.controls['min'].value + '&max=' + this.registerForm.controls['max'].value
    window.location.href = this.url_api + '/accounts/signup/' + parameters
  }

}
