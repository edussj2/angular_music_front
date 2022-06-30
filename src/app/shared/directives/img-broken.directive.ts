import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg: string = ''
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;

    if(this.customImg==='1'){
      elNative.src = './assets/img/default.svg';
    }else{
      elNative.src = './assets/img/default2.svg';
    }
  }

  constructor(private elHost: ElementRef) { 

  }

}
