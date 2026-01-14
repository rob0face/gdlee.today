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
      heading_ko: "2025-12-07",
      content_ko: "놓친 기회는 돌아보지 말자+너는 옳은 방향으로 가고 있으니까+지금부터 후회 없이, 앞으로 나아가자",
      heading_en: "December 7th, 2025",
      content_en: "Never look back at missed oppertunities+You're on the right track+No regrets from now, just move on",
    },
    {
      heading_ko: "2025-12-08",
      content_ko: "사실 일하는 거 노잼 ㅋㅋ+5 달동안 재밌다고 했는데+이제 뉴비 보호 기간 끝난 듯",
      heading_en: "December 8th, 2025",
      content_en: "Work is actually boring lol+For 5 months I thought it was fun+but I guess the newbie buff is over now",
    },
    {
      heading_ko: "2026-01-07",
      content_ko: "왜 인디 개발자들이 업데이트를 안하는지 깨달았다+겨우 멀쩡히 작동하는 버전을 출시했는데+이미 여기저기 땜질이 가득하기 때문에+다시 열어보기가 싫은 것이었다+지금 내가 그렇다...",
      heading_en: "January 7th, 2026",
      content_en: "I realized why indie developers don't update+After releasing a barely working version,+it's full of patches here and there from beginning+so they don't want to look into it again+That's me right now...",
    },
    {
      heading_ko: "2026-01-14",
      content_ko: "세인트마틴 섬에 가고싶어서+비용을 계산해봤는데,+약 천만 원이었다+내 연봉의 30%를 1 년의 1.4% 기간에 쓰는 건데+그래도 가고싶다",
      heading_en: "January 14th, 2026",
      content_en: "I wanted to go to St. Martin+so I calculated the cost,+it was roughly 10 Mn KRW+It means spending 30% of my annual salary for 1.4% of the year+which I still wish to",
    },
  ];
}
