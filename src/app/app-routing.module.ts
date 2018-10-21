import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path: 'section/:section', component: NewsComponent },
  { path: '', redirectTo: 'section/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
