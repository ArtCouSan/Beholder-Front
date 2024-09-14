import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Camera } from '../../../core/camera.dto';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { DetectEpiService } from '../../../core/detective.service';

@Component({
  selector: 'app-details-detect-epi-plus',
  templateUrl: './details-detect-epi-plus.component.html',
  styleUrls: ['./details-detect-epi-plus.component.scss']
})
export class DetailsDetectEpiPlusComponent implements OnInit, OnDestroy {

  @Input() cameraDetalhes!: Camera;
  @Output() voltar = new EventEmitter<void>();

  detections: any[] = [];  // Para armazenar os resultados das detecções
  detectionInterval: any;  // Variável para armazenar o intervalo
  savedImages: any[] = [];  // Para armazenar as imagens salvas

  constructor(
    private detectEpiService: DetectEpiService,  // Injeta o serviço de detecção
    library: FaIconLibrary
  ) {
    library.addIcons(faAngleLeft);
  }

  ngOnInit(): void {
    // Inicia o intervalo para buscar as detecções a cada 2 segundos
    this.detectionInterval = setInterval(() => {
      this.detectEpiService.getDetections().subscribe(
        (data) => {
          this.detections = data;  // Armazena os resultados no array detections
        },
        (error) => {
          console.error('Erro ao buscar detecções', error);
        }
      );
    }, 2000); // Atualiza a cada 2 segundos

    // Carrega as imagens salvas para a galeria
    this.detectEpiService.getSavedImages().subscribe(
      (data) => {
        this.savedImages = data;  // Armazena as imagens salvas no array savedImages
        console.log(this.savedImages);  // Exibe no console para debug
      },
      (error) => {
        console.error('Erro ao buscar imagens salvas', error);
      }
    );
  }

  ngOnDestroy(): void {
    // Para o intervalo quando o componente é destruído
    if (this.detectionInterval) {
      clearInterval(this.detectionInterval);
    }
  }

  onVoltar() {
    this.voltar.emit();
  }
}
