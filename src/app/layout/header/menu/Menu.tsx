import { MenuItemData } from '@/models/menuItemData.interface';
import { MenuRoute } from '@/core/menuRoute.enum';
import MenuItem from '../menu-item/MenuItem';

export default function Menu({ isTransaction, all, t }: any) {
  const menuItems: MenuItemData[] = [
    {
      label: t?.howItWorks,
      link: MenuRoute.HOME,
    },
    {
      label: t?.collections,
      link: MenuRoute.HOME,
    },
    {
      label: t?.accessories,
      link: MenuRoute.HOME,
    },
    {
      label: t?.inspiration,
      link: MenuRoute.HOME,
    },
    {
      label: t?.account,
      link: MenuRoute.SIGN_IN,
      transaction: true,
    },
    {
      label: t?.cart,
      link: MenuRoute.SIGN_IN,
      transaction: true,
    },
  ];

  const items: MenuItemData[] = all
    ? menuItems
    : menuItems.filter(({ transaction }: MenuItemData) =>
        isTransaction ? transaction : !transaction
      );

  return (
    <>
      <ul
        className={`flex flex-col md:flex-row h-full justify-around md:gap-4`}
      >
        {items.map((menuItem: MenuItemData, index: number) => (
          <MenuItem data={menuItem} key={`menu-item-${index}`} />
        ))}
      </ul>
    </>
  );
}
