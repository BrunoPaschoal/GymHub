import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IMenuItem } from '../../../interfaces/AppTypes';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input({ required: true }) menuItem!: IMenuItem;
}
