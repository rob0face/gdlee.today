import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { License } from './page/license/license';
import { Contact } from './page/contact/contact';
import { Notfound } from './page/notfound/notfound';
import { Social } from './page/social/social';
import { Life } from './page/life/life';

export const routes: Routes = [
    { path: '', component: Home, title: 'Home [●_○]' },
    { path: 'license', component: License, title: 'License [●_○]' },
    { path: 'contact', component: Contact, title: 'Contact [●_○]' },
    { path: 'social', component: Social, title: 'Social [●_○]' },
    { path: 'life', component: Life, title: 'Life [●_○]' },
    // More pages can be added here, 404 must be the last
    { path: '**', component: Notfound, title: '404 [●_○]' }
];