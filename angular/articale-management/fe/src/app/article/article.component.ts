import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles !:Article[];

  constructor(private as  : ArticleService) { }
  ngOnInit(): void {
   this.as.getArticles().subscribe(res=>{
    this.articles= res;
   }
  , err=>{
    console.log(err);
 
  })
  }



}
