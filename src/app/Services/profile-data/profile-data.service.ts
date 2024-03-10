import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor() { }

  projects:any = [
   
    {
      id: 1,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githuburl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
      imgUrl: '/assets/images/v1.png',
      tech: 'Angular ,Bootstrap'
    },

    {
      id: 2,
      title: 'Weather App with Angular',
      desc: '',
      livedemo: 'https://mehulk05.github.io/React-Weather/',
      githurl: 'https://github.com/mehulk05/React-Weather-App',
      imgUrl: "/assets/images/v1.png",
      tech: 'Angular, OpenWeatherApi'
    },
    {
      id: 10,
      title: 'DotNet core + Angular 16 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 's/assets/images/v1.png',
      tech: 'Angular 16, DotNet core ,Web Api'
    },

  ]

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
}
