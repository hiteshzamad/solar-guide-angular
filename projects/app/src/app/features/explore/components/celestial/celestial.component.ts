import { Component, Input } from '@angular/core';
import { CelestialModel } from 'projects/app/src/app/core/models/celestial.model';

@Component({
  selector: 'app-celestial',
  templateUrl: './celestial.component.html',
  styleUrls: ['./celestial.component.scss']
})
export class CelestialComponent {

  @Input() celestial: CelestialModel;

}
