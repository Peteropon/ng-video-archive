import { Component, Input } from '@angular/core';
import { IBand } from '../band-list/band';

@Component({
  selector: 'va-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent {
  @Input() band: IBand = {
    bandName: '',
    path: '',
    videos: []
  }
}
