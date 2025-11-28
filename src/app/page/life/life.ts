/* Angular */
import { Component, AfterViewInit, ElementRef } from '@angular/core';
/* Service */
import { Screen } from '../../app.screen';

@Component({
  selector: 'app-life',
  imports: [],
  templateUrl: './life.html',
  styleUrl: './life.css',
})
export class Life implements AfterViewInit {
  constructor(
    /* Angular */ private el: ElementRef,
    /* Service */ public screen: Screen,
  ) {}

  ngAfterViewInit() {
    const notes = this.el.nativeElement.querySelectorAll('.sticky-note');
    notes.forEach((note: HTMLElement) => {
      const rotation = (Math.random() - 0.5) * 20; // Random rotation between -10 and 10 degrees
      note.style.transform = `rotate(${rotation}deg)`;
    });
  }
}
