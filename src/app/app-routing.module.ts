import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test-page',
    loadChildren: () =>
      import(
        /* webpackChunkName: "nationwide-term-module" */ './natiowide-term/nationwide-term.module'
      ).then((m) => m.NationWideTermModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
