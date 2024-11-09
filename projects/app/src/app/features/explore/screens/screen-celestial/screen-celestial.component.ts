import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelestialModel } from 'projects/app/src/app/core/models/celestial.model';
import { CelestialService } from 'projects/app/src/app/core/services/celestial.service';

@Component({
  selector: 'app-screen-celestial',
  templateUrl: './screen-celestial.component.html',
  styleUrls: ['./screen-celestial.component.scss']
})
export class ScreenCelestialComponent implements OnInit {
  celestialId: string | null = null;
  celestial: CelestialModel | null = null;

  constructor(private celestialService: CelestialService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.celestialId = this.route.snapshot.paramMap.get('id');
    if (this.celestialId) {
      this.celestial = this.celestialService.getCelestialById(this.celestialId)
    }
  }
}