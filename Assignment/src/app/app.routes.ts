import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { SearchComponent } from './component/search/search.component';

export const routes: Routes = [
    {
        path : "home",
        component:HomeComponent
    },
    {
        path : "about",
        component:AboutComponent
    },
    {
        path: '',
        redirectTo:'/about',
        pathMatch:'full'
    },
    {
        path : "contact",
        component:ContactComponent
    },
    {
        path : "login",
        component:LoginComponent
    },
    {
        path : "logout",
        component:LogoutComponent
    },
    {
        path : "serach",
        component:SearchComponent
    }
];
