import { Component, OnInit } from '@angular/core';
import { IBand } from './band';
import { BandService } from './band.service';

@Component({
  selector: 'va-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {
  constructor(private BandService: BandService) {}

  bands: IBand[] = [];

  ngOnInit(): void {
    this.bands = this.BandService.getBands()
  }
}
