import { Component } from '@angular/core';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css']
})
export class InputfieldComponent {
  text: string = "";
  updateText(t: string) {
    this.text = t
  }
}
