import { Component } from '@angular/core';
import { IMenuitens } from '../../interfaces/AppTypes';
import { MENU_ITEMS } from '../../constants/menuItems';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [FontAwesomeModule, MenuItemComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  itemsList: IMenuitens[] = MENU_ITEMS;
}
