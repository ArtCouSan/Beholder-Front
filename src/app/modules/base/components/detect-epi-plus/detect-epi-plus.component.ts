import { Component, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detect-epi-plus',
  templateUrl: './detect-epi-plus.component.html',
  styleUrls: ['./detect-epi-plus.component.scss']
})
export class DetectEpiPlusComponent implements OnInit, OnDestroy {

  cameraUrls: { name: string, url: string, safeUrl: SafeResourceUrl }[] = [
    { name: 'Camera 1', url: 'http://localhost:5000/video_feed', safeUrl: 'http://localhost:5000/video_feed' },
    { name: 'Camera 2', url: '', safeUrl: '' },
    { name: 'Camera 3', url: '', safeUrl: '' },
    // Adicione mais câmeras conforme necessário
  ];

  @ViewChildren('videoElement') videoElements!: QueryList<HTMLVideoElement>;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.cameraUrls = this.cameraUrls.map(url => ({
      ...url,
      safeUrl: url.safeUrl
    }));
  }

  ngOnDestroy(): void {
    this.stopAllVideos();
  }

  stopAllVideos(): void {
    this.videoElements.forEach(video => {
      video.src = '';  // Limpa a fonte do vídeo para parar o feed
    });
  }
}
