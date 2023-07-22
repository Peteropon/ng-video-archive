import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IBand } from '../band-list/band';
import { BandService } from '../band-list/band-list.service';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';

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
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const path = this.route.snapshot.paramMap.get('path');
    if (path) {
      this.band = this.bandService.getBand(path);
    }
  }

  onBack(): void {
    this.router.navigate(['/bands']);
  }

  extractVideoId(url: string) {
    return url.substring(url.indexOf('=') + 1);
  }

  openDialog(
    url: string,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ) {
    this.dialog.open(VideoDialogComponent, {
      data: this.extractVideoId(url),
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
