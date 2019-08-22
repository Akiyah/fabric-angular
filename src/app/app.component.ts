import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fabric-angular';

  private canvas: any;

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      isDrawingMode: true
    });
  }
}
