
import { Component, Inject, ElementRef, ViewChild, HostListener, Renderer2, OnInit} from '@angular/core';


@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  @ViewChild('svgArrow', { static: false}) svgArrow: ElementRef;
  @ViewChild('myline', { static: false}) myline: ElementRef;
  @ViewChild('circle', { static: false}) circle: ElementRef;
  length: number;

  constructor(private el: ElementRef) {}
  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  checkScroll() {
    console.log("You scrolled ");
    let length = this.myline.nativeElement.getTotalLength();
    this.myline.nativeElement.style.strokeDasharray = length;
    this.myline.nativeElement.style.strokeDashoffset = length;
    
    var scrollPercent = (window.pageYOffset + this.el.nativeElement.offsetTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log(window.pageYOffset);
    console.log(this.el.nativeElement.offsetTop);
    console.log(document.documentElement.scrollHeight);
    console.log(document.documentElement.clientHeight);
    var draw = length * scrollPercent;

    this.myline.nativeElement.style.strokeDashoffset = length - draw;
    var endPoint = this.myline.nativeElement.getPointAtLength(draw);
    this.circle.nativeElement.setAttribute("cx", endPoint.x);
    this.circle.nativeElement.setAttribute("cy", endPoint.y);


    console.log("endpoint x=" + endPoint.x);
    console.log("endpoint y=" + endPoint.y);
/* 

    let componentPosition = this.el.nativeElement.offsetTop;
    let length = this.myline.nativeElement.getTotalLength();
    this.myline.nativeElement.style.strokeDasharray = length;
    this.myline.nativeElement.style.strokeDashoffset = length;

    let scrollPosition = window.pageYOffset;
    let scrollPercent: number;
    if (scrollPosition >= componentPosition) {
      // This isn't actually a percentage - in the example they're using a variable between 0 and 1.
      scrollPercent =  (((scrollPosition - componentPosition) / length));

      let draw = length * scrollPercent;
      this.myline   .nativeElement.style.strokeDashoffset = length - draw;
  
    } */
    /* let componentPosition = this.el.nativeElement.offsetTop;
    let scrollPosition = window.pageYOffset;

    let svgLength = this.svgArrow.nativeElement.getTotalLength();
    this.svgArrow.nativeElement.style.strokeDasharray = svgLength;
    this.svgArrow.nativeElement.style.strokeDashoffset = svgLength;

    let scrollPercent: number;

    if (scrollPosition >= componentPosition) {
      // This isn't actually a percentage - in the example they're using a variable between 0 and 1.
      scrollPercent =  (((scrollPosition - componentPosition) / svgLength));

      let draw = svgLength * scrollPercent;
      this.svgArrow.nativeElement.style.strokeDashoffset = svgLength - draw;
  
    } */
  }
  public pageTitle = 'About Me';
}
