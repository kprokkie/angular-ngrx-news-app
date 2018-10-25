import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { News } from '../../../models/news';

@Component({
  selector: 'nyt-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})

export class NewsItemComponent implements OnInit {

  @Input() news: News[] = [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Watch changes to property
   * @param changes - changes to bind property
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.news = changes.news.currentValue;
  }

}
