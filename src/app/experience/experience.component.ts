import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IExperience } from './experience';
import { ExperienceService } from "./experience.service"


@Component({
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience: IExperience[] = [];
  responsiveOptions: any;
  sub!: Subscription;
  errorMessage: string = "Error";

  constructor(private experienceService: ExperienceService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ]


  }

  pageTitle: string = "Experience";
  
  ngOnInit(): void {
    console.log("Init Experience");
    this.sub = this.experienceService.getExperience().subscribe({
      next: experience => {
        this.experience = experience;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
