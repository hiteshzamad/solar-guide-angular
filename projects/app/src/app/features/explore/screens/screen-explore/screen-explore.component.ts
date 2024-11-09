import { Component } from '@angular/core';
import { CelestialService } from 'projects/app/src/app/core/services/celestial.service';
import { CelestialTypeModel } from '../../../../core/models/celestial-type.model';

@Component({
  selector: 'app-screen-explore',
  templateUrl: './screen-explore.component.html',
  styleUrls: ['./screen-explore.component.scss']
})
export class ScreenExploreComponent {

  celestialTypeList: CelestialTypeModel[] 

  constructor(private celestialService: CelestialService) {
    this.celestialTypeList = celestialService.celestialTypeList
  }
}
