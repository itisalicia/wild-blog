import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page-component/home-page-component';
import { ArticlePageComponent } from './pages/article-page-component/article-page-component';
import { NotFoundPageComponent } from './pages/not-found-page-component/not-found-page-component';

export const routes: Routes = [
    { path: '', pathMatch:'full', component: HomePageComponent },
    { path: 'article/:id', component: ArticlePageComponent },
    { path: '**', component: NotFoundPageComponent }

];
