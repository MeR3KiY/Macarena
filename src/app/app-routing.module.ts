import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MacarenaComponent } from './macarena/macarena.component';

const routes: Routes = [
  { path: '', component: MacarenaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
