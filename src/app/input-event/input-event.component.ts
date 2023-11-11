import { Component } from '@angular/core';

@Component({
  selector: 'app-input-event',
  templateUrl: './input-event.component.html',
  styleUrls: ['./input-event.component.css']
})
export class InputEventComponent {
  text: string = "";
  changeText(element: Event) {
    this.text = (<HTMLInputElement>element.target).value;

    /*
     // Cast the event to HTMLInputElement to access its value
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    */
  }
}
