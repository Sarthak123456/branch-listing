 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { ServicesComponent } from './services/services.component';
import { TestComponent } from './test/test.component';
import { TestService } from './test.service';
import { AppRoutingModule } from './/app-routing.module';
import { UsersComponent } from './users/users.component'

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
          UsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
