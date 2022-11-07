import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/models/testimonial';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  testimonials: Testimonial[] | undefined;
  constructor(
    private homeService: HomeService
  ) { }
  ngOnInit(): void {
    this.homeService.getTestimonials().subscribe({
      next: response => {
        this.testimonials = response
      },
      error: error => {
        console.log(error)
      }
    })
  }

}
