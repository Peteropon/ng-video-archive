import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { BandListComponent } from './band-list/band-list.component';

const routes: Routes = [{ path: 'bands', component: BandListComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}
