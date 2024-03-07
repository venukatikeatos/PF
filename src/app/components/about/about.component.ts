import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/Services/Smooth-Scroll/scroll.service';

@Component({
  selector: 'app-about',
  templateUrl:'./about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{


  constructor(private scrollService:ScrollService) {

  }
  ngOnInit(): void {
  }

  scrollToContact(): void {
    this.scrollService.scrollToElement('contact');
  }
}
