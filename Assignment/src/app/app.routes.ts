<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
=======
import { Routes } from '@angular/router';
>>>>>>> b91eb2d24cb90e195380ac1dc6c1a5f35521a9bd
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

<<<<<<< HEAD
const routes: Routes = [
=======
export const routes: Routes = [
>>>>>>> b91eb2d24cb90e195380ac1dc6c1a5f35521a9bd
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
=======
  { path: 'logout', component: LogoutComponent }
];
>>>>>>> b91eb2d24cb90e195380ac1dc6c1a5f35521a9bd
