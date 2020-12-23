import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {
  data: Date;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.date();
  }
   date(){
     this.data= this.service.Date
   }
}
