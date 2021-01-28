import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../@core/model/respuesta';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableroService {
  private url = 'https://jsonplaceholder.typicode.com/users';

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
