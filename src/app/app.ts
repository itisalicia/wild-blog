import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ArticleList } from './components/article-list/article-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ArticleList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'wild-blog';
}
