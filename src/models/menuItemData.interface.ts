import { MenuRoute } from '@/core/menuRoute.enum';

export interface MenuItemData {
  label?: string;
  link: MenuRoute;
  transaction?: boolean;
}
