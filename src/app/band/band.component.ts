import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBand } from '../band-list/band';
import { BandService } from '../band-list/band-list.service';

@Component({
  selector: 'va-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css'],
})
export class BandComponent implements OnInit {
  band?: IBand = {
    bandName: '',
    path: '',
    videos: [],
  };

  constructor(
    private bandService: BandService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const path = this.route.snapshot.paramMap.get('path');
    if (path) {
      this.band = this.bandService.getBand(path);
      const videoInfo = this.band?.videos.forEach((video) => {
        const updatedVideo = {
          ...video,
          videoId: this.extractVideoId(video.url),
        };
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/bands']);
  }

  extractVideoId(url: string) {
    return url.substring(url.indexOf('=') + 1);
  }
}
