import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor() { }

  myExperience:any=[{
          companyName:"Atos Syntel,Pune",
          experienceFromTo:"Present - 24 Jan 2022",
          desc:'Working as a Dot Net FullStack Developer',  },
          {
            companyName:"B.Tech in Computer Science",
            experienceFromTo:"2017 -2021",
            desc:'B.Tech Graduate in Computer Science and Engineering',
       
    }]
  projects:any = [
   
    {
      id: 1,
      title: 'My Portfolio',
      desc: 'My Portfolio developed using Angular and Bootstrap',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githuburl: 'https://github.com/venukatike/Portfolio',
      imgUrl: '/assets/images/portfolio.png',
<<<<<<< HEAD
      tech: 'Angular ,Bootstrap'
=======
      tech: 'Angular , Bootstrap 5, Html    , CSS'
>>>>>>> 0c5f0ac69841a2bb8fb2d2098ceaeadf91563a64
    },

    {
      id: 2,
      title: 'WeatherApp',
      desc: 'Its a weather app developed by me venu katike',
      livedemo: 'https://weatherapp-venukatike.netlify.app/',
      githuburl: 'https://github.com/venukatike/JavaScript-Projects',
      imgUrl: "/assets/images/WeatherApp.png",
<<<<<<< HEAD
      tech: 'Angular, OpenWeatherApi'
=======
      tech: 'HTML, CSS, JavaScript, OpenWeatherApi'
>>>>>>> 0c5f0ac69841a2bb8fb2d2098ceaeadf91563a64
    },
    {
      id: 3,
      title: 'Lab Management System',
      desc: 'LMS is a .NetCore and Angular 16 CRUD Example',
      livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githuburl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: '/assets/images/LMS Project.png',
<<<<<<< HEAD
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
=======
>>>>>>> 0c5f0ac69841a2bb8fb2d2098ceaeadf91563a64
      tech: 'Angular 16, DotNet core ,Web Api'
    }, {
      id: 1,
      title: 'My Portfolio',
      desc: 'My Portfolio developed using Angular and Bootstrap',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githuburl: 'https://github.com/venukatike/Portfolio',
      imgUrl: '/assets/images/portfolio.png',
      tech: 'Angular , Bootstrap 5, Html    , CSS'
    },

    {
      id: 2,
      title: 'WeatherApp',
      desc: 'Its a weather app developed by me venu katike',
      livedemo: 'https://weatherapp-venukatike.netlify.app/',
      githuburl: 'https://github.com/venukatike/JavaScript-Projects',
      imgUrl: "/assets/images/WeatherApp.png",
      tech: 'HTML, CSS, JavaScript, OpenWeatherApi'
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
    

  ]

  skills:any=[
    {
      id:1,
      imgUrl:"/assets/images/angular.png",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"/assets/images/javascript.svg",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"/assets/images/npm.svg",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"/assets/images/bootstrap.svg",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"/assets/images/css3.svg",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"/assets/images/html5.svg",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"/assets/images/jwt.png",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"/assets/images/git.svg",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"/assets/images/materialui.svg",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"/assets/images/postman.png",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"/assets/images/sass.png",
      tech:'Angular'
    },
    {
      id:1,
      imgUrl:"/assets/images/vscode.png",
      tech:'Angular'
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
<<<<<<< HEAD
=======
  getmyExperience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.myExperience;
  }
>>>>>>> 0c5f0ac69841a2bb8fb2d2098ceaeadf91563a64
}
