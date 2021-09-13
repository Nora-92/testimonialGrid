import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TestimonialsService } from '../core/services/testimonials.service';

export interface Testimonial {
  id: number,
  avatar: string,
  name: string,
  job: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  testimonials: Testimonial[] = [];
  arrTestimonial: Testimonial[] = [];
  arrayTestimonial: Testimonial[] = [];

  constructor(private testimonial: TestimonialsService) { }

  ngOnInit(): void {
    this.testimonial.getAllTestimonials().subscribe(
      res => {
        this.testimonials = res;
        this.arrTestimonial = res.filter(id => id.id !== this.testimonials.length);
        this.arrayTestimonial = res.filter(id => id.id === this.testimonials.length);
        console.log('sono in home', res);
        console.log('arrTestimonial', this.arrTestimonial);
        console.log('arrayTestimonial', this.arrayTestimonial)
      }
    );
  }

  getTestimonial() {
    this.arrTestimonial = this.testimonials.filter(id => id.id !== this.testimonials.length);
    this.arrayTestimonial = this.testimonials.filter(id => id.id === this.testimonials.length);
  }

}
