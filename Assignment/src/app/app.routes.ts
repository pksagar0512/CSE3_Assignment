import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { LoginComponent } from '../components/login/login.component';
import { LogoutComponent } from '../components/logout/logout.component';

export const routes: Routes = [ 
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'about',
        component : AboutComponent
    },
    {
        path : 'contact',
        component : ContactComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'logout',
        component : LogoutComponent
    },
    


];
