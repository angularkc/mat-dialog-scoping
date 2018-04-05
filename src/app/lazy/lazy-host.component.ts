import {Component, ElementRef, Renderer2} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DynamicMatSnackBar} from '../dynamic-overlay-container/dynamic-snack-bar';
import {DYNAMIC_MAT_PROVIDERS} from '../dynamic-overlay-container/dynamic-overlay.module';


@Component({
  selector: 'sst-lazy-host',
  template: `
    <p>lazy-host works!</p>
    <button mat-raised-button (click)="openSnackBar()">
      lazy dialog
    </button>
    <button mat-raised-button (click)="openCustomSnackBar()">
      lazy scoped dialog
    </button>
  `,
  styles: [`
    :host {
      display: block;
      min-width: 300px;
      min-height: 300px;
      border: 1px solid darkred;
      margin: 20px;
    }
  `],
  providers: DYNAMIC_MAT_PROVIDERS
})
export class LazyHostComponent {

  constructor(private mdSnackBar: MatSnackBar,
              private customSnackBar: DynamicMatSnackBar,
              private elementRef: ElementRef,
              renderer: Renderer2) {

    this.customSnackBar.setContainerElement(this.elementRef.nativeElement, renderer);
  }

  openSnackBar() {

    this.mdSnackBar.open('hello');
  }

  openCustomSnackBar() {

    this.customSnackBar.open('hello');
  }
}
