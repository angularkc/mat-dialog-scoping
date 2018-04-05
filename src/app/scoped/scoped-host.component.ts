import {Component, ElementRef, Renderer2} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DynamicMatDialog} from '../dynamic-overlay-container/dynamic-dialog';
import {DYNAMIC_MAT_PROVIDERS} from '../dynamic-overlay-container/dynamic-overlay.module';
import {ScopedDialogComponent} from './scoped-dialog.component';

@Component({
  selector: 'sst-scoped-host',
  template: `
    <p>scoped-host works!</p>
    <button mat-raised-button color="primary" (click)="openDialog()">
      dialog
    </button>
    <button mat-raised-button color="primary" (click)="openScopedDialog()">
      scoped dialog
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
  // needed for making sure this component gets its own decoupled instances of the DynamicMatDialog service
  // including the DynamicOverlayContainer to specify its own container element
  providers: DYNAMIC_MAT_PROVIDERS
})
export class ScopedHostComponent {

  constructor(private mdDialog: MatDialog,
              private customDialog: DynamicMatDialog,
              private elementRef: ElementRef,
              renderer: Renderer2) {

    this.customDialog.setContainerElement(this.elementRef.nativeElement, renderer);
  }

  openDialog() {
    this.mdDialog.open(ScopedDialogComponent);
  }

  openScopedDialog() {
    this.customDialog.open(ScopedDialogComponent);
  }
}
