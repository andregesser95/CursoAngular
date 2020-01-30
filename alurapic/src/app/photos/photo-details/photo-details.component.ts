import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo/photo-comment';

@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;
    photoId: number;

    constructor(
        private route: ActivatedRoute,
        private photosService: PhotoService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId
        this.photo$ = this.photosService.findById(this.photoId);
    }

    remove() {
        this.photosService
            .removePhoto(this.photoId)
            .subscribe(() => this.router.navigate(['']));
    }

}