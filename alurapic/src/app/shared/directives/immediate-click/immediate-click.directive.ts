import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/platform-detector.services';

@Directive({
    selector: '[immediateClick]'
})
export class immediateClickDirective implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private platFormDetector: PlatformDetectorService) {}

        ngOnInit(): void {    
            this.platFormDetector.isPlatformBrowser &&
            this.element.nativeElement.click();

    }
}