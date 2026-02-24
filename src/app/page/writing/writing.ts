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
      labels: ['[●_○]'],
      link: '/writing/demopost',
      icon: 'auto_stories'
    },
    {
      title: 'Playlist (24 Most Favorites)',
      title_ko: '플리 (24 최애 모음)',
      date: new Date("2025-12-03"),
      description: 'My 24 most favorite tracks.',
      description_ko: '최애 24곡이에요.',
      labels: ["Favorite"],
      link: '/writing/playlist-24',
      icon: 'music_note'
    },
    {
      title: 'Writing Hobby',
      title_ko: '글쓰기 취미',
      date: new Date("2026-02-23"),
      description: 'One of my long-lasting helpful hobbies.',
      description_ko: '제가 오랫동안 유지한 건강한 취미들 중 하나예요.',
      labels: ["Hobby"],
      link: '/writing/write',
      icon: 'edit'
    },
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