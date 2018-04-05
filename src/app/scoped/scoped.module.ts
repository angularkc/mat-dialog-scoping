import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import {DynamicMatDialogModule} from '../dynamic-overlay-container/dynamic-overlay.module';
import {ScopedDialogComponent} from './scoped-dialog.component';
import {ScopedHostComponent} from './scoped-host.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    DynamicMatDialogModule
  ],
  declarations: [ScopedHostComponent, ScopedDialogComponent],
  entryComponents: [ScopedDialogComponent],
  exports: [ScopedHostComponent]
})
export class ScopedModule {
}
