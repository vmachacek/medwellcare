import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { QuestionsComponent } from './homepage/questions/questions.component';


const routes: Routes = [
  { path: 'not-yet', component: QuestionsComponent },
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
