import { Routes } from '@angular/router';
import { ExclusiveComponent } from './exclusive/exclusive.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'exclusive', component: ExclusiveComponent }
];
