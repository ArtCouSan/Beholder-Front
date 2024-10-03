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
  imageInterval: any;  // Novo intervalo para imagens

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

    // Atualizar as imagens salvas a cada 2 segundos
    this.imageInterval = setInterval(() => {
      this.detectEpiService.getSavedImages().subscribe(
        (data) => {
          this.savedImages = data;
        },
        (error) => {
          console.error('Erro ao buscar imagens salvas', error);
        }
      );
    }, 2000); // Intervalo de 2 segundos

    // Carregar as imagens salvas ao iniciar
    this.detectEpiService.getSavedImages().subscribe(
      (data) => {
        this.savedImages = data;
      },
      (error) => {
        console.error('Erro ao buscar imagens salvas', error);
      }
    );
  }

  ngOnDestroy(): void {
    // Para os intervalos quando o componente é destruído
    if (this.detectionInterval) {
      clearInterval(this.detectionInterval);
    }
    if (this.imageInterval) {
      clearInterval(this.imageInterval); // Limpar o intervalo das imagens
    }
  }
  onVoltar() {
    this.voltar.emit();
  }
}
