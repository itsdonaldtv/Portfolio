import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ExperienceComponent } from './experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ExperienceComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'experience', component: ExperienceComponent},
    ]),
    SharedModule
  ]
})
export class ExperienceModule { }
