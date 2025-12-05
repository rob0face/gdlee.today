/* Angular */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
/* Service */
import { Screen } from '../../app.screen';

@Component({
  selector: 'app-project',
  imports: [
    /* Angular */ RouterLink
  ],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  constructor(
    /* Service */ public screen: Screen,
  ) {}

  public projects = [
    {
      // Added on 2025-12-01
      title: 'gdlee.today',
      title_ko: 'gdlee 투데이',
      date: new Date("2025-12-01"),
      description: 'About making this website.',
      description_ko: '이 웹사이트에 대한 것들.',
      labels: ['Angular', 'TypeScript', 'Web'],
      link: '/project/today',
      icon: 'language'
    },
    {
      // Added on 2025-12-03
      title: 'Aurora Airlinez',
      title_ko: '오로라 항공사',
      date: new Date("2025-10-20"),
      description: 'About making a fake airline website.',
      description_ko: '가짜 항공사 홈페이지를 만들어본 결과.',
      labels: ['Angular', 'TypeScript', 'Firebase', 'Web'],
      link: '/project/aaz',
      icon: 'flight_takeoff'
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