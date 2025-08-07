import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
export interface Tile {
  title: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  imports: [MatButtonModule,MatCardModule,MatListModule,MatGridListModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
 tiles: Tile[] = [
    {title: '', text: '', cols: 1, rows: 4, color: "url('https://as1.ftcdn.net/v2/jpg/02/59/37/90/1000_F_259379069_QPx9JLvVpJcDgS1zlSiXukAFn81KjUs0.jpg')"},
    {title: 'SVB: Suport Vital Basic', text: 'testa efafas qwf qwfas fea fawf awfaef ae asfaw fa faw fas fasfa sf ', cols: 3, rows: 2, color: ''},
    {title: 'Ús del desfibrilador', text: 'asfasfqwtrfqwe as fqw fas faw faf wf aw aw faw ', cols: 3, rows: 2, color: ''},

  ];
}
