
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    public loader: any

    constructor(private loadingController: LoadingController) {

    }

    async showLoader() {
        this.loader = await this.loadingController.create({
            cssClass: 'my-custom-class',
            duration: 2000
        });
        await this.loader.present();
    }

    async hideLoader() {
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
