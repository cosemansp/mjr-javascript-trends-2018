import { Component } from '@angular/core';
// import moment from 'moment';
import format from 'date-fns/format';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ng-app' + format(new Date());
}
