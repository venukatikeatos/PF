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
      title: 'My Portfolio',
      desc: 'My Portfolio developed using Angular and Bootstrap',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githuburl: 'https://github.com/venukatike/Portfolio',
      imgUrl: '/assets/images/portfolio.png',
      tech: 'Angular ,Bootstrap'
    },

    {
      id: 2,
      title: 'WeatherApp',
      desc: 'Its a weather app developed by me venu katike',
      livedemo: 'https://weatherapp-venukatike.netlify.app/',
      githuburl: 'https://github.com/venukatike/JavaScript-Projects',
      imgUrl: "/assets/images/WeatherApp.png",
      tech: 'Angular, OpenWeatherApi'
    },
    {
      id: 3,
      title: 'Lab Management System',
      desc: 'LMS is a .NetCore and Angular 16 CRUD Example',
      livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githuburl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: '/assets/images/LMS Project.png',
      tech: 'Angular 16, DotNet core ,Web Api'
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
    },{
      id: 10,
      title: 'DotNet core + Angular 16 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 's/assets/images/v1.png',
      tech: 'Angular 16, DotNet core ,Web Api'
    },{
      id: 10,
      title: 'DotNet core + Angular 16 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 's/assets/images/v1.png',
      tech: 'Angular 16, DotNet core ,Web Api'
    },{
      id: 10,
      title: 'DotNet core + Angular 16 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 's/assets/images/v1.png',
      tech: 'Angular 16, DotNet core ,Web Api'
    },{
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

  skills:any=[
    {
      id:1,
      imgUrl:"",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"",
      tech:'Angular'
    }
  ]

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  getSkills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skills;
  }
}
