import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { TopsearchbarComponent } from './topsearchbar/topsearchbar.component';
import { QuestionsComponent } from './questions/questions.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomepageComponent, TopsearchbarComponent, QuestionsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomepageModule { }
