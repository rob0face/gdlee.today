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
      title: 'Demopost',
      title_ko: '데모포스트',
      date: new Date("2025-12-01"),
      description: 'This is a demo post.',
      description_ko: '데모 포스팅이에요.',
      link: '/writing/demopost',
      icon: 'auto_stories'
    },
    {
      title: 'Website uses Biscuit',
      title_ko: '비스킷을 허용해주세요',
      date: new Date("2025-12-01"),
      description: 'UK websites use biscuits instead of cookies.',
      description_ko: '영국 웹사이트는 쿠키가 아닌 비스킷을 사용한대요.',
      link: '/writing/biscuit',
      icon: 'cookie'
    },
    {
      title: 'Trivia about gdlee.today',
      title_ko: 'gdlee.today/여담',
      date: new Date("2025-12-01"),
      description: 'Trivia about gdlee.today.',
      description_ko: 'gdlee.today와 관련한 여담 모음.',
      link: '/writing/trivia',
      icon: 'lightbulb'
    }
  ];

  getDaysAgo(date: Date): string {
    const today = new Date();
    const diffTime = today.getTime() - date.getTime();
    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      return '오늘 게시됨 (투데이!)';
    } else if (diffDays === 1) {
      return '어제 게시됨';
    } else if (diffDays > 1) {
      return `${diffDays} 일 전 게시됨`;
    } else {
      diffDays = Math.abs(diffDays);
      return `${diffDays} 일 후 게시 예정`;
    }
  }
}