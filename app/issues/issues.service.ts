import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class IssuesService {
  private _issuesUrl = "http://localhost:3000/issues";
    private count=100;
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
    constructor (private _http: HttpClient) { }

    getIssues() {
        return this._http.get(this._issuesUrl);
    }

    getIssue(id) {

      this._issuesUrl = "http://localhost:3000/issues?id="+id;
      return this._http.get(this._issuesUrl);
    }

    updateIssue(issue, id) {
      this._issuesUrl = "http://localhost:3000/issues/"+id;
      console.log(this._issuesUrl);
      console.log(issue);
      return this._http.put(this._issuesUrl, issue);
    }
  
}
