import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//import { ScrollService } from 'src/app/Services/Smooth-Scroll/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo='Venu Katike';
  constructor(private viewportScroller:ViewportScroller) {

  }
  ngOnInit(): void {
  }

  // scrollToAbout(): void {
  //   this.scrollService.scrollToElement('contact');
  // }
  // scrollToSkills(): void {
  //   this.scrollService.scrollToElement('1contact');
  // }
  // scrollToHome(): void {
  //   this.scrollService.scrollToElement('Home');
    
  // }
  scrollToElement(elementId:string):void{
    this.viewportScroller.scrollToAnchor(elementId);
    this.viewportScroller.setOffset([0,64]);
  }

}
