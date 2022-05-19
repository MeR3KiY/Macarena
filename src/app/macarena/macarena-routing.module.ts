import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegPageComponent } from './pages/reg-page/reg-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'regpage', component: RegPageComponent},
  { path: 'profile', component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MacarenaRoutingModule { }
