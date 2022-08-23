import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SiteComponent } from './component/site/site.component';

const routes: Routes = [{ path: '', component: LoginComponent }, 
{ path: 'login', component: LoginComponent },
{ path: 'site', component: SiteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
