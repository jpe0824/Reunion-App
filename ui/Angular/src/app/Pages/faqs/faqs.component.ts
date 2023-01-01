import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  public faq1isCollapsed = true;
  public faq2isCollapsed = true;
  public faq3isCollapsed = true;
  public faq4isCollapsed = true;
  public faq5isCollapsed = true;
  public faq6isCollapsed = true;
  public faq7isCollapsed = true;
  public faq8isCollapsed = true;
  public faq9isCollapsed = true;
  public faq10isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
