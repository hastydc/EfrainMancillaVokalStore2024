import { MenuRoute } from '@/core/menuRoute.enum';
import { MenuItemData } from '@/models/menuItemData.interface';
import SiteCollection from './site-collection/SiteCollection';

export default function SiteMap({ t }: any) {
  const shopItems: MenuItemData[] = [
    {
      label: t.collections,
      link: MenuRoute.HOME,
    },
    {
      label: t.accessories,
      link: MenuRoute.HOME,
    },
    {
      label: t.inspiration,
      link: MenuRoute.HOME,
    },
  ];

  const discoverItems: MenuItemData[] = [
    {
      label: t.howItWorks,
      link: MenuRoute.HOME,
    },
    {
      label: t.designAdvice,
      link: MenuRoute.HOME,
    },
    {
      label: t.stories,
      link: MenuRoute.HOME,
    },
  ];

  const contactItems: MenuItemData[] = [
    {
      label: t.faq,
      link: MenuRoute.HOME,
    },
    {
      label: t.affiliateProgram,
      link: MenuRoute.HOME,
    },
    {
      label: t.tradeProgram,
      link: MenuRoute.HOME,
    },
  ];

  return (
    <>
      <div
        className={`flex flex-col md:flex-row w-full justify-between gap-y-8 md:gap-x-16 max-w-lg`}
      >
        <div className={`flex`}>
          <SiteCollection data={shopItems} title={t.shop} />
        </div>

        <div className={`flex`}>
          <SiteCollection data={discoverItems} title={t.discover} />
        </div>

        <div className={`flex`}>
          <SiteCollection data={contactItems} title={t.contact} />
        </div>
      </div>
    </>
  );
}
