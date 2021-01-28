import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuesta } from '../@core/model/respuesta';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as DeviceDetector from "device-detector-js";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private url = `${environment.apiUrl}/Autenticacion`

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  post(usuario: any): Observable<Respuesta> {

    /* const deviceDetector = new DeviceDetector();
    const data = deviceDetector.parse(navigator.userAgent);

    usuario.Dispositivo = `${data.device.type}${data.device.brand ? ', ' + data.device.brand + ' - ' + data.device.model : ''}`;
    usuario.Navegador = `${data.client.name} ${data.client.version} `;
    usuario.SistemaOperativo = `${data.os.name} ${data.os.version} ${data.os.platform ? ' - ' + data.os.platform : ''}`; */
    
    const body = JSON.stringify(usuario);

    return this.http.post<Respuesta>(
      this.url,
      body,
      {
        headers: new HttpHeaders().set('content-type', 'application/json')
      }).pipe(
        map((result: Respuesta) => {
          return result;
        }),
        catchError(
          (error) => {
            return this.errorService.handleError(error);
          })
      );
  }
}
