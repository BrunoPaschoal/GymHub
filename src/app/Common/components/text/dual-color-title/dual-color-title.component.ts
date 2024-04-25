import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dual-color-title',
  standalone: true,
  templateUrl: './dual-color-title.component.html',
  styleUrl: './dual-color-title.component.scss',
})
export class DualColorTitleComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) highlightedPart: string = '';
}
