import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [ 
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
anchorScrolling:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
