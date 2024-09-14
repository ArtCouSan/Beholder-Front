import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetectEpiService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  // Função para buscar as detecções ao vivo
  getDetections(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/detections`);
  }

    // Função para buscar as imagens salvas do MongoDB
    getSavedImages(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/saved_images`);
    }
}
