import { Component, OnInit } from '@angular/core';
import { Issues } from './issues';
import { IssuesService } from './issues.service';

@Component({
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  title: string = 'Issues List';
  Issues: any = [];

  constructor(private issuesService: IssuesService) {
  }
  ngOnInit() {
    this.getIssues();
  }
  getIssues() {
    this.Issues = [];
    this.issuesService.getIssues().subscribe((data: {}) => {
      console.log(data);
      this.Issues = data;
    })
    
  }
}
