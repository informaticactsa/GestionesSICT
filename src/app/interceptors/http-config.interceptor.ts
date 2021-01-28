import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap, retry, timeout, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { MensajeToastService } from '../service/mensaje-toast.service';

@Injectable()

export class HttpConfigInterceptor implements HttpInterceptor {

  isLoading: boolean = false;
  isErrorService: boolean = false;
  constructor(
    public loadingController: LoadingController,
  ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.present();
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          //console.log('event--->>>', event);
        }
        this.dismiss();
        return event;
      }),
      retry(2),
      timeout(5000),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        this.dismiss();
        return throwError(error);
      })
    );
  }

  public loader: any
  async present() {
    this.loader = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 2000
    });
    await this.loader.present();
  }


  async dismiss() {
    let topLoader = await this.loadingController.getTop();
    while (topLoader) {
      if (!(await topLoader.dismiss())) {
        // throw new Error('Could not dismiss the topmost loader. Aborting...');
        break
      }
      topLoader = await this.loadingController.getTop();
    }
  }
}