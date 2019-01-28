import { Component, OnInit } from '@angular/core';
import { EditIssue } from './issues';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IssuesService } from "./issues.service";

@Component({
  selector: 'editissue-form',
  templateUrl: './editissue-form.component.html'
})
export class EditIssueFormComponent implements OnInit {
  constructor(private _issueService: IssuesService, private route: ActivatedRoute, private router: Router) { }
  Priority: string[] = ["High", "Medium", "Low"];
  Status: string[] = ["Open", "In Progress", "Closed"]
  id: any;
  public editissue: any;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
  });

  this._issueService.getIssue(this.id).subscribe((data: {}) => {
    console.log(data);
    this.editissue = data;
  })
  }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let updatedIssue = {
          id: this.editissue[0].id,
          Discription: formValue.name,
          Priority: formValue.Priority,
          Status: formValue.Status,
        };
        console.log(updatedIssue);
    this._issueService.updateIssue(updatedIssue, this.editissue[0].id).subscribe(data  => {

      console.log("PUT Request is successful ", data);});
    this.router.navigate(['']);
  }
}

