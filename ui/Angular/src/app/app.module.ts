import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { WhoComponent } from './pages/who/who.component';
import { WhatComponent } from './pages/what/what.component';
import { WhenComponent } from './pages/when/when.component';
import { WhereComponent } from './pages/where/where.component';
import { FaqsComponent } from './pages/faqs/faqs.component';

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
