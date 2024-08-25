import { Component, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera } from '../../../../core/camera.dto';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detect-epi-plus',
  templateUrl: './detect-epi-plus.component.html',
  styleUrls: ['./detect-epi-plus.component.scss']
})
export class DetectEpiPlusComponent implements OnInit, OnDestroy {

  cameraUrls: Camera[] = [
    { name: 'Camera', url: 'http://localhost:5000/video_feed', safeUrl: 'http://localhost:5000/video_feed', hovering: false },
    { name: 'Camera 2', url: '', safeUrl: '', hovering: false  },
    { name: 'Camera 3', url: '', safeUrl: '', hovering: false  },
    { name: 'Camera 4', url: '', safeUrl: '', hovering: false  },
    // Adicione mais câmeras conforme necessário
  ];

  cameraDetalhes: Camera | null = null;

  @ViewChildren('videoElement') videoElements!: QueryList<HTMLVideoElement>;

  constructor(private sanitizer: DomSanitizer,
    library: FaIconLibrary
  ) {
    library.addIcons(faEllipsis);
  }

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

  detalhesCamera(camera: Camera): void {
    this.cameraDetalhes = { ...camera };
  }

  
  voltar(): void {
    this.cameraDetalhes = null;
  }

  setHovering(camera: any, isHovering: boolean) {
    camera.hovering = isHovering;
  }
}
