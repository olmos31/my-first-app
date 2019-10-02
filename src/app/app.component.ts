import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-first-app';
  username = '';


ngOnInit() {

}

// onText(event: Event) {
// this.username = 'Hi';
// }

// onClick() {
// this.username = '';
// }


}
