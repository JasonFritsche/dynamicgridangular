import { Component, OnInit } from '@angular/core';
import * as bandData from './powermetal.json';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent implements OnInit {
  public columns: number = 4;
  public bands: any = (bandData as any).default;

  constructor() {}
  ngOnInit(): void {}

  public getStyles() {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.columns}, 1fr)`,
      'justify-items': 'center',
    };
  }
}
