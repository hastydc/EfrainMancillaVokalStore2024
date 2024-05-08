import { useTranslations } from 'next-intl';
import Subscribe from './subscribe/Subscribe';
import SiteMap from './site-map/SiteMap';

export default function Footer() {
  const t = useTranslations();
  const texts = {
    collections: t('collections'),
    accessories: t('accessories'),
    inspiration: t('inspiration'),
    howItWorks: t('howItWorks'),
    designAdvice: t('designAdvice'),
    stories: t('stories'),
    faq: t('faq'),
    affiliateProgram: t('affiliateProgram'),
    tradeProgram: t('tradeProgram'),
    shop: t('shop'),
    discover: t('discover'),
    contact: t('contact'),
    invalidEmail: t('invalidEmail'),
    required: t('required'),
    enterYourEmail: t('enterYourEmail'),
    signUp: t('signUp'),
    thanks: t('thanks'),
    subscribeToTheNewsletterToBeTheFirstToHearAboutVokalBrandUpdatesAndNews: t(
      'subscribeToTheNewsletterToBeTheFirstToHearAboutVokalBrandUpdatesAndNews'
    ),
  };

  return (
    <>
      <footer
        className={`flex flex-col md:flex-row p-10 md:p-20 bg-vokal-black text-vokal-white gap-4`}
      >
        <div className={`flex lg:mr-48 md:flex-1`}>
          <Subscribe t={texts} />
        </div>

        <div className={`flex`}>
          <SiteMap t={texts} />
        </div>
      </footer>
    </>
  );
}
