import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'credits', loadChildren: './credits/credits.module#CreditsPageModule' },  {
    path: 'notice/:id', loadChildren: './pages/notice/notice.module#NoticePageModule' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
