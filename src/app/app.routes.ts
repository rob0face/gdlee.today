import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { License } from './page/license/license';
import { Company } from './page/company/company';
import { Contact } from './page/contact/contact';
import { Notfound } from './page/notfound/notfound';

export const routes: Routes = [
    { path: '', component: Home, title: '홈 - 윈컨프레이트' },
    { path: 'license', component: License, title: '라이선스 - 윈컨프레이트' },
    { path: 'company', component: Company, title: '회사소개 - 윈컨프레이트' },
    { path: 'contact', component: Contact, title: '주소와 연락처 - 윈컨프레이트' },
    // More pages can be added here, 404 must be the last
    { path: '**', component: Notfound, title: '404 - 윈컨프레이트' }
];