import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { environment } from '../environments/environment'
import query, { Response } from '../queries/issueList';

const template = `
  <ol id="issue-list">
    <label for="issue-list">
      Issue List
    </label>
    <li *ngFor="let issue of issues | async">
      {{issue.node.title}}
    </li>
  </ol>
`;

@Component({
  selector: 'issue-list',
  template
})
class IssueListComponent {
  issues: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {

    const owner = environment.repositoryPath.split("/")[0];
    const name = environment.repositoryPath.split("/")[1];

    this.issues = this.apollo
      .watchQuery<Response>({
        query,
        variables: { owner, name }
      })
      .valueChanges
      .pipe(map(result => result.data && result.data.repository.issues.edges));
  }
}

export { IssueListComponent };