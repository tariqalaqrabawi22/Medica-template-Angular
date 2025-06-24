import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Features } from './features/features.component'
import { Practice } from './practice/practice.component'
import { Doctor } from './doctor/doctor.component'

@NgModule({
  declarations: [Features, Practice, Doctor],
  imports: [CommonModule, RouterModule],
  exports: [Features, Practice, Doctor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
