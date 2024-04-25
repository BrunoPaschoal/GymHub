import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-simple-info-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './simple-info-card.component.html',
  styleUrl: './simple-info-card.component.scss',
})
export class SimpleInfoCardComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) color: string = '';
  @Input({ required: true }) icon!: IconProp;
  @Input() highlightedText: string = '';
  @Input() amount: string = '';
}
