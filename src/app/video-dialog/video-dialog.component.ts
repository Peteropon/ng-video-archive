import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { IVideo } from '../band-list/video';

@Component({
  selector: 'va-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.css'],
})
export class VideoDialogComponent {
  safeURL: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IVideo,
    private _sanitizer: DomSanitizer
  ) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(data.url);
  }
}
