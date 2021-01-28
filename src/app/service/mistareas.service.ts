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
export class MisTareasService {
  private url = `${environment.apiUrl}/Gestiones/ObtenerTareasxUsuario`

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  get(): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.url).pipe(
      map(
        (result: Respuesta) => {
          return result;
        }
      ),
      catchError((error, data) => {
        return this.errorService.handleError(error);
      })
    )
  }
}
