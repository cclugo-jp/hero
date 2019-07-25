import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CafesComponent } from './cafes/cafes.component';
import { FormsModule } from '@angular/forms';
import { CafeDetailComponent } from './cafe-detail/cafe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CafesComponent,
    CafeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
