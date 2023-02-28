import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BandListComponent } from './band-list/band-list.component';
import { BandComponent } from './band/band.component';

@NgModule({
  declarations: [
    AppComponent,
    BandListComponent,
    BandComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
