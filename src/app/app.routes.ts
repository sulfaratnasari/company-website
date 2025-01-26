import { Routes } from '@angular/router';
import { ExclusiveComponent } from './exclusive/exclusive.component';
import { HomeComponent } from './home/home.component';
import { ClassicComponent } from './classic/classic.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'exclusive', component: ExclusiveComponent },
    { path: 'classic', component: ClassicComponent},
    { path: 'about-us', component: AboutUsComponent}
];
