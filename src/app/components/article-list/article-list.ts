import { Component } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.html',
  styleUrls: ['./article-list.css']
})
export class ArticleList {
  article: Article = {
    title: "Ceci est un titre",
    content: "Contenu random d'article",
    image: "https://placehold.co/150x150",
    createdAt: new Date(),
    likeCount: 0,
    categoryName: "Angular"
  };
}

interface Article {
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  likeCount: number;
  categoryName: string;
}
