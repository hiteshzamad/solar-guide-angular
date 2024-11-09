import { Component } from '@angular/core';
import { CelestialService } from 'projects/app/src/app/core/services/celestial.service';
import { CelestialTypeModel } from '../../../../core/models/celestial-type.model';
import { CelestialModel } from 'projects/app/src/app/core/models/celestial.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-explore',
  templateUrl: './screen-explore.component.html',
  styleUrls: ['./screen-explore.component.scss']
})
export class ScreenExploreComponent {

  celestialTypeList: CelestialTypeModel[]

  constructor(private celestialService: CelestialService, private router: Router) {
    this.celestialTypeList = celestialService.celestialTypeList
  }

  onCelestialClick(celestial: CelestialModel) {
    this.router.navigate(['/explore', celestial.id]);
  }
}
