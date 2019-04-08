import { Component } from '@angular/core';

const template = `
  <issue-list></issue-list>
`;

@Component({
  selector: 'app-root',
  template,
  styles: [``]
})
class AppComponent {
  title = 'ng-apollo';
}

export { AppComponent };