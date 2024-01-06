import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';
import * as moment from "moment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  startDate:Moment

  constructor(){
    
  }
  ngOnInit(): void {
    this.startDate = moment().subtract(5, 'months').startOf('month');
  }

  getSelectedDate(e){
    debugger
  }

  title = 'app';
}
