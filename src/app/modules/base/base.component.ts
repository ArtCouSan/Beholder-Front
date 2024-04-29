import { MediaMatcher } from '@angular/cdk/layout';
import { ComponentType } from '@angular/cdk/portal';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DetectEpiPlusComponent } from './components/detect-epi-plus/detect-epi-plus.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent implements OnDestroy {

  conteudoDinamico: ComponentType<any> | null;
  componentHome = HomeComponent;
  componentDetectEpiPlus = DetectEpiPlusComponent;
  mobileQuery: MediaQueryList;
  
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.conteudoDinamico = null;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  mostrarComponente(componente: ComponentType<any>) {
    this.conteudoDinamico = componente;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}