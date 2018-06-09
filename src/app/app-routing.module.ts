import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { UsersComponent } from './users/users.component'

const routes: Routes= [
  {
    path: 'profiles',
    
    children:[
      {
      path: '',
      component:  contentAreaComponent
      
      },
      
      {
        
        path: ':username',
        component: TestComponent
      }
      ]
  },

  
  {
    path:'',
    component: contentAreaComponent
  }
  
  // {
  //   path:'profiles/:username',
  //   component: TestComponent
    
    
  // }
  
  
  }
  
  
@NgModule({
  
  exports:[ RouterModule], 
  
  imports : [ RouterModule.forRoot(routes)]

})
export class AppRoutingModule { }
export const routingComponents= [contentAreaComponent, TestComponent]
