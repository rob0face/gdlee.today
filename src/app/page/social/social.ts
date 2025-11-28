/* Angular */
import { Component } from '@angular/core';
/* Service */
import { Screen } from '../../app.screen';

@Component({
  selector: 'app-social',
  imports: [],
  templateUrl: './social.html',
  styleUrl: './social.css',
})
export class Social {
  constructor(
    /* Service */ public screen: Screen
  ) {}
}
