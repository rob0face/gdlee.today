/* Angular */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
/* Service */
import { Screen } from '../../app.screen';

@Component({
  selector: 'app-writing',
  imports: [
    /* Angular */ RouterLink
  ],
  templateUrl: './writing.html',
  styleUrl: './writing.css',
})
export class Writing {
  constructor(
    /* Service */ public screen: Screen,
  ) {}

  public writings = [
    {
      // Added on 2025-12-01
      title: 'Demopost',
      title_ko: '데모포스트',
      date: new Date("2025-12-01"),
      description: 'This is a demo post.',
      description_ko: '데모 포스팅이에요.',
      labels: ['[●_○]'],
      link: '/writing/demopost',
      icon: 'auto_stories'
    },
    {
      // Added on 2025-12-01
      title: 'Trivia about me',
      title_ko: 'gdlee/여담',
      date: new Date("2025-12-03"),
      description: 'You might not want to know these.',
      description_ko: '알고 싶지 않을 수도 있어요.',
      labels: ["TMI"],
      link: '/writing/trivia',
      icon: 'co_present'
    }
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  getDaysAgo(date: Date): string {
    const today = new Date();
    const diffTime = today.getTime() - date.getTime();
    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      return '오늘 업데이트됨 (투데이!)';
    } else if (diffDays === 1) {
      return '어제 업데이트됨';
    } else if (diffDays > 1) {
      return `${diffDays} 일 전 업데이트됨`;
    } else {
      diffDays = Math.abs(diffDays);
      return `${diffDays} 일 후 공개 예정`;
    }
  }
}