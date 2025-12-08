/* Angular */
import { Routes } from '@angular/router';
/* Page */
import { Home } from './page/home/home';
import { License } from './page/license/license';
import { Contact as About } from './page/contact/contact'; // Too lazy to change component name and path
import { Notfound } from './page/notfound/notfound';
import { Social } from './page/social/social';
import { Life } from './page/life/life';
import { Chitchat } from './page/chitchat/chitchat';
import { Design } from './page/design/design';
import { Writing } from './page/writing/writing';
import { Project } from './page/project/project';
/* Writings */
import { Demopost } from './page/writings/demopost/demopost';
import { Trivia } from './page/writings/trivia/trivia';
/* Projects */
import { Aaz } from './page/projects/aaz/aaz';
import { Today } from './page/projects/today/today';

export const routes: Routes = [
    { path: '', component: Home, title: 'Home [●_○]' },
    { path: 'license', component: License, title: 'License [●_○]' },
    { path: 'about', component: About, title: 'About [●_○]' },
    { path: 'social', component: Social, title: 'Social [●_○]' },
    { path: 'life', component: Life, title: 'Life [●_○]' },
    { path: 'chitchat', component: Chitchat, title: 'Chit Chat [●_○]' },
    { path: 'design', component: Design, title: 'Design [●_○]' },
    { path: 'writing/demopost', component: Demopost, title: 'Demo [●_○]' },
    { path: 'writing/trivia', component: Trivia, title: 'Trivia [●_○]' },
    { path: 'writing', component: Writing, title: 'Writing [●_○]' },
    { path: 'project/today', component: Today, title: 'Today [●_○]' },
    { path: 'project/aaz', component: Aaz, title: 'AAZ [●_○]' },
    { path: 'project', component: Project, title: 'Project [●_○]' },
    // More pages can be added here, 404 must be the last
    { path: '**', component: Notfound, title: '404 [●_○]' }
];