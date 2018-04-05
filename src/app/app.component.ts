import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DynamicMatDialog} from './dynamic-overlay-container/dynamic-dialog';
import {RootDialogComponent} from './root-dialog.component';

@Component({
  selector: 'sst-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <button mat-raised-button (click)='openDialog()'>
      root dialog
    </button>
    <button mat-raised-button (click)='openCustomDialog()'>
      root custom dialog
    </button>
    <sst-scoped-host></sst-scoped-host>
    <a mat-raised-button routerLink='lazy'>
      load lazy module
    </a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor(
    private mdDialog: MatDialog,
    private customDialog: DynamicMatDialog
  ) {}

  openDialog() {
    this.mdDialog.open(RootDialogComponent);
  }

  openCustomDialog() {
    this.customDialog.open(RootDialogComponent);
  }
}
