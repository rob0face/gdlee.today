/* Angular */
import { Routes, ResolveFn } from '@angular/router';
/* Page */
import { Home } from './page/home/home';
import { License } from './page/license/license';
import { Contact } from './page/contact/contact';
import { Notfound } from './page/notfound/notfound';
import { Social } from './page/social/social';
import { Life } from './page/life/life';
import { Design } from './page/design/design';
import { Writing } from './page/writing/writing';
/* Writing */
import { Demopost } from './page/writings/demopost/demopost';
import { Biscuit } from './page/writings/biscuit/biscuit';
import { Trivia } from './page/writings/trivia/trivia';

export const routes: Routes = [
    { path: '', component: Home, title: 'Home [●_○]' },
    { path: 'license', component: License, title: 'License [●_○]' },
    { path: 'contact', component: Contact, title: 'Contact [●_○]' },
    { path: 'social', component: Social, title: 'Social [●_○]' },
    { path: 'life', component: Life, title: 'Life [●_○]' },
    { path: 'design', component: Design, title: 'Design [●_○]' },
    { path: 'writing/demopost', component: Demopost, title: 'Demo [●_○]' },
    { path: 'writing/biscuit', component: Biscuit, title: 'Website uses Biscuit [●_○]' },
    { path: 'writing/trivia', component: Trivia, title: 'Trivia [●_○]' },
    { path: 'writing', component: Writing, title: 'Writing [●_○]' },
    // More pages can be added here, 404 must be the last
    { path: '**', component: Notfound, title: '404 [●_○]' }
];