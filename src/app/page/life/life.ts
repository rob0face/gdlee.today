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
      const rotation = (Math.random() - 0.5) * 15;
      note.style.transform = `rotate(${rotation}deg)`;
    });
  }

  notes = [
    {
      heading_ko: "2025-07-01",
      content_ko: "저 취직했어요!",
      heading_en: "July 1st, 2025",
      content_en: "I got a job!",
    },
    {
      heading_ko: "2025-11-28",
      content_ko: "gdlee.today 웹사이트 미리 오픈!+아직 허접해서 정식 오픈은 아니에요.",
      heading_en: "November 28th, 2025",
      content_en: "gdlee.today website is in preview!+Work in progress, not an official launch yet.",
    },
    {
      heading_ko: "2025-12-19",
      content_ko: "부터 자취 시작!",
      heading_en: "December 19th, 2025",
      content_en: "Starting living alone from this date!",
    },
    {
      heading_ko: "2026-01-22",
      content_ko: "3박 4일 고등학교 친구들과+오사카 여행 가기로 했어요!",
      heading_en: "January 22nd, 2026",
      content_en: "Going a 3-night, 4-day trip to Osaka+with high school friends!",
    }
  ];
}
