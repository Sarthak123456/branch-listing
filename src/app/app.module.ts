 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { ServicesComponent } from './services/services.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    			AppComponent,
    			headerComponent,
    			navComponent,
    			contentAreaComponent,
    			footerComponent,
          aboutComponent,
          ServicesComponent,
          TestComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

    {

    path:'about',
    component: aboutComponent
    },

    {

    path: '',
    component: contentAreaComponent

    }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
