import {LiveAnnouncer} from '@angular/cdk/a11y';
import {Injectable, Injector, Optional, Renderer2, SkipSelf} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {DynamicOverlay} from './dynamic-overlay';

@Injectable()
export class DynamicMatSnackBar extends MatSnackBar {

  private _customOverlay: DynamicOverlay;

  constructor(_overlay: DynamicOverlay,
              _injector: Injector,
              _liveAnnouncer: LiveAnnouncer,
              @Optional() @SkipSelf() _parentSnackBar: DynamicMatSnackBar) {

    super(_overlay, _liveAnnouncer, _injector, _parentSnackBar);
    this._customOverlay = _overlay;
  }

  public setContainerElement(containerElement: HTMLElement, renderer: Renderer2): void {

    // need to apply this styling to make the backdrop with position: fixed styling cover only the containerElement
    renderer.setStyle(containerElement, 'transform', 'translateZ(0)');

    this._customOverlay.setContainerElement(containerElement);
  }
}
