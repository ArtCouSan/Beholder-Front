import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detect-epi-plus',
  templateUrl: './detect-epi-plus.component.html',
  styleUrls: ['./detect-epi-plus.component.scss']
})
export class DetectEpiPlusComponent implements OnInit, OnDestroy {

  private videoUrl = 'http://localhost:5000/video_feed';
  videoSafeUrl: SafeUrl | undefined;
  private videoBlobUrl: string | undefined;
  private videoInterval: any;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadVideo();
  }

  ngOnDestroy(): void {
    if (this.videoInterval) {
      clearInterval(this.videoInterval);
    }
    if (this.videoBlobUrl) {
      window.URL.revokeObjectURL(this.videoBlobUrl);
    }
  }

  loadVideo() {
    this.http.get(this.videoUrl, { responseType: 'blob' }).subscribe(
      response => {
        this.videoBlobUrl = window.URL.createObjectURL(response);
        this.videoSafeUrl = this.sanitizer.bypassSecurityTrustUrl(this.videoBlobUrl);
        this.startVideoStreaming();
      },
      error => {
        console.error('Error loading video:', error);
      }
    );
  }

  startVideoStreaming() {
    this.videoInterval = setInterval(() => {
      this.http.get(this.videoUrl, { responseType: 'blob' }).subscribe(
        response => {
          if (this.videoBlobUrl) {
            window.URL.revokeObjectURL(this.videoBlobUrl);
          }
          this.videoBlobUrl = window.URL.createObjectURL(response);
          this.videoSafeUrl = this.sanitizer.bypassSecurityTrustUrl(this.videoBlobUrl);
        },
        error => {
          console.error('Error streaming video:', error);
        }
      );
    }, 1000); // Adjust the interval according to your needs
  }
}
