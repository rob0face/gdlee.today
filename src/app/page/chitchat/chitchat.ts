/* Angular */
import { Component, AfterViewInit, ElementRef } from '@angular/core';
/* Service */
import { Screen } from '../../app.screen';

@Component({
  selector: 'app-life',
  imports: [],
  templateUrl: './chitchat.html',
  styleUrl: './chitchat.css',
})
export class Chitchat implements AfterViewInit {
  constructor(
    /* Angular */ private el: ElementRef,
    /* Service */ public screen: Screen,
  ) {}

  ngAfterViewInit() {
    const notes = this.el.nativeElement.querySelectorAll('.sticky-note');
    notes.forEach((note: HTMLElement) => {
      const rotation = (Math.random() - 0.5) * 15;
      note.style.transform = `rotate(${rotation}deg)`;
    });
  }

  notes = [
    {
      heading_ko: "2025-12-08",
      content_ko: "사실 일하는 거 노잼 ㅋㅋ+5달 동안 재밌다고 했는데+이제 뉴비 보호 기간 끝난 듯",
      heading_en: "December 8th, 2025",
      content_en: "Work is actually boring lol+For 5 months I thought it was fun+but I guess the newbie buff is over now",
    },
    {
      heading_ko: "2026-01-08",
      content_ko: "벌써 24세라고?+아직도 못해본 게 너무 많은데?",
      heading_en: "January 8th, 2026",
      content_en: "I'm already 24 years old?+There are still so many things+I haven't done yet?",
    },
  ];
}
