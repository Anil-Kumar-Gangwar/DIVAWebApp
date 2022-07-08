import { Component, OnInit } from '@angular/core';
import { Facilitator } from 'src/app/models/facilitator.model';
import { FacilitatorService } from 'src/app/services/facilitator/facilitator.service';

@Component({
  selector: 'app-facilitator-list',
  templateUrl: './facilitator-list.component.html',
  styleUrls: ['./facilitator-list.component.css'],
})
export class FacilitatorListComponent implements OnInit {
  facilitators?: Facilitator[];
  constructor(private facilitator: FacilitatorService) {}

  ngOnInit(): void {
    // this.retrieveFacilitators();
  }

  retrieveFacilitators(): void {
    this.facilitator.getAll().subscribe({
      next: (data) => {
        this.facilitators = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
