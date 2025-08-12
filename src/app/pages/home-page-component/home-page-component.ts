import { Component } from '@angular/core';
import { ArticleList } from '../../components/article-list/article-list';

@Component({
  selector: 'app-home-page-component',
  imports: [ArticleList],
  templateUrl: './home-page-component.html',
  styleUrl: './home-page-component.css'
})
export class HomePageComponent {

}
