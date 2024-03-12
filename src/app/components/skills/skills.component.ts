import { Component } from '@angular/core';
import { ProfileDataService } from 'src/app/Services/profile-data/profile-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
<<<<<<< HEAD
skills:any;
constructor(private skill:ProfileDataService) {
  
}
ngOnInit(): void {
  this.skills=this.skill.getSkills();
 }
=======
  skills:any;
  constructor(private skill:ProfileDataService) {
    
  }
  ngOnInit(): void {
    this.skills=this.skill.getSkills();
   }
>>>>>>> 0c5f0ac69841a2bb8fb2d2098ceaeadf91563a64
}
