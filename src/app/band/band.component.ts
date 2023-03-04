import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBand } from '../band-list/band';

@Component({
  selector: 'va-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  @Input() band: IBand = {
    bandName: '',
    path: '',
    videos: []
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const bandname = this.route.snapshot.paramMap.get('path')
  }
}
