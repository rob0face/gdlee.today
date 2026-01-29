/* Angular */
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
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
    /* Angular */ private el: ElementRef, private router: Router,
    /* Service */ public screen: Screen,
  ) {}

  ngAfterViewInit() {
    const notes = this.el.nativeElement.querySelectorAll('.sticky-note');
    notes.forEach((note: HTMLElement) => {
      const rotation = (Math.random() - 0.5) * 15;
      note.style.transform = `rotate(${rotation}deg)`;
    });
  }

  onNoteClick(index: number) {
    const chitChatPortal = 5;
    if (index === chitChatPortal) {
      this.router.navigate(['/chitchat']);
    }
  }

  notes = [
    {
      heading_ko: "2025-07-01",
      content_ko: "취직했어요.",
      heading_en: "July 1st, 2025",
      content_en: "I got employed.",
    },
    {
      heading_ko: "2025-11-28",
      content_ko: "gdlee.today 웹사이트 미리 오픈!+아직 허접해서 정식 오픈은 아니에요.",
      heading_en: "November 28th, 2025",
      content_en: "gdlee.today website is in preview!+Work in progress, not an official launch yet.",
    },
    {
      heading_ko: "2025-12-19",
      content_ko: "자취 시작!",
      heading_en: "December 19th, 2025",
      content_en: "Living alone!",
    },
    {
      heading_ko: "2026-01-01",
      content_ko: "2025년을 살아남으신 여러분,+수고하셨습니다.",
      heading_en: "January 1st, 2026",
      content_en: "To everyone who survived 2025,+well done.",
    },
    {
      heading_ko: "2026-01-08",
      content_ko: "가장 차가운 데이브의+가장 차가운 생일.",
      heading_en: "January 8th, 2026",
      content_en: "The coldest birthday+for the coldest Dave.",
    },
    {
      heading_ko: "2026-01-19",
      content_ko: "휴가를 내고 일본 오사카로+여행을 갔어요.",
      heading_en: "January 19th, 2026",
      content_en: "Went on a vacation+to Osaka, Japan.",
    },
    {
      heading_ko: "2026-01-29",
      content_ko: "WinRAR 라이선스를 구매했어요.",
      heading_en: "January 29th, 2026",
      content_en: "Purchased a WinRAR license.",
    },
    {
      heading_ko: "2026-01-31",
      content_ko: "gdlee.today의 영어 사이트를+준비하고 있어요.",
      heading_en: "January 31st, 2026",
      content_en: "Preparing the English version of+gdlee.today.",
    },
  ];
}
