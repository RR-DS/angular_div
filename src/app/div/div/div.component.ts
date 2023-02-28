import { Component, OnInit } from '@angular/core';
import { DivService } from '../services';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {
private res: number = 0;
  constructor(private divServices: DivService) { }

  ngOnInit(): void {
  }

  div(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.divServices.div(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }

}
