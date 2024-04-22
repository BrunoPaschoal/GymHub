import { Component } from '@angular/core';
import { IMenuCategory } from '../../interfaces/AppTypes';
import { MENU_DATA } from '../../constants/menuItems';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuCategoryComponent } from '../menu-category/menu-category.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [FontAwesomeModule, MenuItemComponent, MenuCategoryComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  menuData: IMenuCategory[] = MENU_DATA;
}
