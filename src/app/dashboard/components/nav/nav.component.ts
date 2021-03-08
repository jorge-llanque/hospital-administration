import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Hospital } from 'src/app/models/hospital';
import { HospitalsService } from 'src/app/services/hospitals/hospitals.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  id: number;
  hospital: Hospital;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private hospitalsService: HospitalsService,
    private activateRoute: ActivatedRoute,
    ) {
  }

}
