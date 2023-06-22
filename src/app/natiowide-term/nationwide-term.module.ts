import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationwideTermComponent } from './nationwide-term.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NationwideTermComponent,
  },
];

@NgModule({
  declarations: [NationwideTermComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NationWideTermModule {}
