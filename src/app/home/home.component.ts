import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public fb: FormBuilder
  ) {}

  registerForm = this.fb.group({
    gender: [''],
    seeking1: [false],
    seeking2: [false],
    min: [18],
    max: [18]
  })

  ngOnInit(): void {
  }

  register(): void{
    let seeking1 = ''
    let seeking2 = ''
    let parameters = ''
    console.log(this.registerForm.value)
    seeking1 = this.registerForm.controls['seeking1'].value == true ? 'M' : ''
    seeking2 = this.registerForm.controls['seeking2'].value == true ? 'F' : ''
    parameters = '?gender=' + this.registerForm.controls['gender'].value + '&seeking1=' + seeking1 + '&seeking2=' + seeking2 + '&min=' + this.registerForm.controls['min'].value + '&max=' + this.registerForm.controls['max'].value
    window.location.href = 'https://www.hunting4connections.com/app/accounts/signup/' + parameters
  }

}
