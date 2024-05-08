import Logo from '@/ui/design-system/logo/Logo';
import Style from './header.module.scss';
import MenuMobile from './menu-mobile/MenuMobile';
import Menu from './menu/Menu';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations();

  const texts = {
    howItWorks: t('howItWorks'),
    collections: t('collections'),
    accessories: t('accessories'),
    inspiration: t('inspiration'),
    account: t('account'),
    cart: t('cart'),
  };

  return (
    <>
      <header
        className={`flex flex-row items-center justify-center text-center box-border p-5 md:py-6 md:px-9 md:pb-6 z-20 ${Style.header}`}
      >
        <div className={`flex flex-1 md:flex-initial self-start`}>
          <Logo />
        </div>

        <div className={`flex md:hidden`}>
          <MenuMobile t={texts} />
        </div>

        <div
          className={`hidden md:flex md:flex-1 flex-col md:flex-row justify-center`}
        >
          <Menu t={texts} />
        </div>

        <div className={`hidden md:flex`}>
          <Menu t={texts} isTransaction={true} />
        </div>
      </header>
    </>
  );
}
