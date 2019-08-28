import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPen, faEraser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fabric-angular';

  private canvas: any;

  constructor(private library: FaIconLibrary) {
    library.addIcons(faPen, faEraser);
  }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      isDrawingMode: true
    });
  }
}
