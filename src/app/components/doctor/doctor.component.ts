import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-doctor',
  templateUrl: 'doctor.component.html',
  styleUrls: ['doctor.component.css'],
})
export class Doctor {
  @Input()
  heading: string = 'Dr. Audrey Smith'
  @Input()
  imageSrc: string = '/assets/Doctors/doctor-1-300w.png'
  @Input()
  imageAlt: string = 'image'
  @Input()
  text: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  constructor() {}
}
