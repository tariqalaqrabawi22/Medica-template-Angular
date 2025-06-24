import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features',
  templateUrl: 'features.component.html',
  styleUrls: ['features.component.css'],
})
export class Features {
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  @Input()
  icon: string = '/assets/Icons/arrow.svg'
  @Input()
  title: string = 'Virtual Assistant'
  constructor() {}
}
