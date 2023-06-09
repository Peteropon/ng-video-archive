import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BandListComponent } from './band-list/band-list.component';
import { BandComponent } from './band/band.component';

@NgModule({
  declarations: [AppComponent, BandListComponent, BandComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: BandListComponent },
      { path: ':path', component: BandComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
