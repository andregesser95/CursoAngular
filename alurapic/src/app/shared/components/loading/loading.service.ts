import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingType } from './loading-type';
import { startWith } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class LoadingService {

    loadingsubject: Subject<LoadingType> = new Subject<LoadingType>();

    getLoading() {
        return this.loadingsubject
        .asObservable()
        .pipe(startWith(LoadingType.STOPPED));
    }

    start() {
        this.loadingsubject.next(LoadingType.LOADING);
    }

    stop() {
        this.loadingsubject.next(LoadingType.STOPPED);
    }

}