import { Component } from '@angular/core';

const template = `
  <ol>
    <li>Issue#1</li>
    <li>Issue#2</li>
  </ol>
`;

@Component({
  selector: 'issue-list',
  template
})
class IssueListComponent {
  title = 'ng-apollo';
}

export { IssueListComponent };