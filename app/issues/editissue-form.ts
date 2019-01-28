import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IssuesService } from "./issues.service";

@Component({
  selector: 'editissue-form',
  templateUrl: './editissue-form.component.html'
})
export class EditIssueFormComponent {
  constructor(private _issueService: IssuesService, private route: ActivatedRoute, private router: Router) { }
  id: any;
  issue: any;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
  });
  this.issue = this._issueService.getIssue(this.id);
  }

}
