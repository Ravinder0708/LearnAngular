import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponent } from './like/like.component';
import { DirectiveModeComponent } from './directive-mode/directive-mode.component';
import { InputDirectiveDirective } from './input-directive.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Practise7Component } from './practise7/practise7.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    BsNavbarComponent,
    FavouriteComponent,
    LikeComponent,
    DirectiveModeComponent,
    InputDirectiveDirective,
    ZippyComponent,
    ContactFormComponent,
    Practise7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
