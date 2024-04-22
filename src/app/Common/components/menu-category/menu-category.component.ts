import { Component, Input } from '@angular/core';
import { IMenuCategory } from '../../interfaces/AppTypes';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-menu-category',
  standalone: true,
  imports: [MenuItemComponent, FontAwesomeModule],
  templateUrl: './menu-category.component.html',
  styleUrl: './menu-category.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', minHeight: '0', margin: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('300ms ease-out')),
    ]),
  ],
})
export class MenuCategoryComponent {
  @Input({ required: true }) menuData!: IMenuCategory;
  arrowDown: IconProp = faAngleDown;
  arrowRight: IconProp = faAngleRight;
  isExpanded: boolean = true;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
