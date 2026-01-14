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
      heading_ko: "2026-01-01",
      content_ko: "2025년을 살아남으신 여러분,+수고하셨습니다.",
      heading_en: "January 1st, 2026",
      content_en: "To everyone who survived 2025,+well done.",
    },
    {
      heading_ko: "2026-01-08",
      content_ko: "가장 차가운 데이브의+가장 차가운 생일.",
      heading_en: "January 8th, 2026",
      content_en: "Coldest birthday+for the coldest Dave.",
    },
    {
      heading_ko: "2026-01-19",
      content_ko: "3박 4일 고등학교 친구들과+오사카 여행 가기로 했어요!",
      heading_en: "January 19th, 2026",
      content_en: "Going a 3-night, 4-day trip to Osaka+with high school friends!",
    },
  ];
}
