import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: RegistrationComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
