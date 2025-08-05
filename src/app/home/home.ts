import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-home',
  imports: [MatButtonModule,MatCardModule,MatListModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
