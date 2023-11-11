import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  // Property binding
  template: '<div class="container alert alert-danger text-center" [hidden]="show">This is notification</div>',
  // styles: ["div{background-color: yellow;}"]
  styles: []
})
export class NotificationComponent {
  show: boolean = false;
}
