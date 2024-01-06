import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import DateRangePicker from 'daterangepicker/daterangepicker'
import { Moment } from 'moment';
import * as moment from "moment";



@Directive({
  selector: '[appMydaterangepicker]'
})
export class MydaterangepickerDirective implements AfterViewInit {
  options:any
  @Input() opens:string = "left"
  @Input() applyButtonClasses:string = "btn-info";
  @Input() startDate:any;
  @Input() maxDate:any;
  @Input() ranges:any;
  @Output() selectedDateRange = new EventEmitter<any>();
  constructor(private el: ElementRef) {}
  ngOnInit(){
    this.options={
      startDate: this.startDate,
      maxDate: this.maxDate,
      ranges: this.ranges,
      applyButtonClasses:this.applyButtonClasses,
      opens:this.opens
    }
  }
  ngAfterViewInit(): void {
    const _ = new DateRangePicker(this.el.nativeElement, this.options, this.dateRangePickerCb.bind(this))
  }
  dateRangePickerCb(startDate,endDate,rangeLabel){
    const selectedDate = {startDate:startDate,endDate:endDate,rangeLabel:rangeLabel}
    this.selectedDateRange.emit(selectedDate)
  };
       

}
