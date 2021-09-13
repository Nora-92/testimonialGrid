import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Testimonial {
  id: number,
  avatar: string,
  name: string,
  job: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() testimonial!: Testimonial;
  @Input() id!: number;

  constructor() { }

  ngOnInit(): void {

  }

}
