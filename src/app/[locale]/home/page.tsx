import { useTranslations } from 'next-intl';
import HomeGallery from './home-gallery/HomeGallery';
import HomeHeader from './home-header/HomeHeader';
import HomeLinks from './home-links/HomeLinks';
import HomeContextProvider from './home.context';

export default function Home() {
  const t = useTranslations();

  const texts = {
    pleasePickAColor: t('pleasePickAColor'),
    pantone: t('pantone'),
  };

  return (
    <>
      <HomeContextProvider>
        <article className={`flex flex-col`}>
          <HomeHeader />

          <HomeGallery t={texts} />

          <HomeLinks />
        </article>
      </HomeContextProvider>
    </>
  );
}
