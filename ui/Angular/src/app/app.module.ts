import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RsvpComponent } from './Pages/rsvp/rsvp.component';
import { WhoComponent } from './Pages/who/who.component';
import { WhatComponent } from './Pages/what/what.component';
import { WhenComponent } from './Pages/when/when.component';
import { WhereComponent } from './Pages/where/where.component';
import { FaqsComponent } from './Pages/faqs/faqs.component';

@NgModule({
  declarations: [
    AppComponent,
    RsvpComponent,
    WhoComponent,
    WhatComponent,
    WhenComponent,
    WhereComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
