import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Testimonial } from 'src/app/home/home.component';
import { environment } from 'src/environments/environment';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  private _testimonials = new BehaviorSubject<Testimonial[]>([]);

  constructor(private http: HttpClient) { }

  getTestimonials () {
    return this._testimonials.asObservable();
  }

  getAllTestimonials () {
    const subject = new Subject<Testimonial[]>();
    this.http.get<Testimonial[]>(environment.endpoints.testimonials.url).pipe(
      map(res => {
        const testimonials = res;
        return testimonials;
      }),
      tap(res => {
        this._testimonials.next(res);
      })
    ).subscribe(
      (res) => { subject.next(res); subject.complete(); }
    );
    return subject.asObservable();
  }
}
