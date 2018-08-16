 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { TestService } from './test.service';
import { AppRoutingModule } from './/app-routing.module';
import { UsersComponent } from './users/users.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    			AppComponent,
    			contentAreaComponent,
          FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
