import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-practice',
  templateUrl: 'practice.component.html',
  styleUrls: ['practice.component.css'],
})
export class Practice {
  @Input()
  title: string = 'Cardiology'
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  constructor() {}
}
