import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { PtBrTranslation } from './Common/helpers/translations';
import { MainLayoutComponent } from './Common/components/layout/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLayoutComponent],
  template: `<router-outlet />`,
})
export class AppComponent implements OnInit {
  title = 'GymHub';

  constructor(private config: PrimeNGConfig) {}

  ngOnInit(): void {
    this.config.setTranslation(PtBrTranslation);
  }
}
