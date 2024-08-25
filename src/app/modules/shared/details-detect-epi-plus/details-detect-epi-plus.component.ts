import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Camera } from '../../../core/camera.dto';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-detect-epi-plus',
  templateUrl: './details-detect-epi-plus.component.html',
  styleUrl: './details-detect-epi-plus.component.scss'
})
export class DetailsDetectEpiPlusComponent {

  @Input()
  cameraDetalhes!: Camera;
  @Output() voltar = new EventEmitter<void>();

  onVoltar() {
    this.voltar.emit(); 
  }

  constructor(library: FaIconLibrary
  ) {
    library.addIcons(faAngleLeft);
  }

}
