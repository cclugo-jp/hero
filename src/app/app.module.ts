import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CafesComponent } from './cafes/cafes.component';
import { FormsModule } from '@angular/forms';
import { CafeDetailComponent } from './cafe-detail/cafe-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

// very much fake api server
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CafeSearchComponent } from './cafe-search/cafe-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CafesComponent,
    CafeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CafeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
