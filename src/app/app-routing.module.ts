import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateTask2Component } from './create-task2/create-task2.component';
import { CreateTask3Component } from './create-task3/create-task3.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'homee', component: HomeComponent },
  { path: 'task', component: CreateTaskComponent },
  { path: 'task2', component: CreateTask2Component },
  { path: 'task3', component: CreateTask3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
