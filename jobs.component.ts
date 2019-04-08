import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './data.service';
import {Job } from './jobsobj';

@Component({
    selector: 'jobs',
    templateUrl: './jobs.html',
    styleUrls: ['./jobs.css'],
  })

export class jobsComponent {
    private jobs: Job[] = [];

    constructor(private dataService: DataService) {
        this.dataService.get_jobs().subscribe((res : Job[])=>{
            this.jobs = res;
          });
    }
}