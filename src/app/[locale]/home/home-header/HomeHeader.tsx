import Filters from './filters/Filters';
import SelectedFilters from './selected-filters/SelectedFilters';
import Title from './title/Title';
import { useTranslations } from 'next-intl';

export default function HomeHeader() {
  const t = useTranslations();

  const texts = {
    black: t('black'),
    inspiration: t('inspiration'),
    workOnVokalInspiration: t('workOnVokalInspiration'),
    white: t('white'),
    style: t('style'),
    room: t('room'),
    choose: t('choose'),
    off: t('off'),
    clearAllFilters: t('clearAllFilters'),
  };

  return (
    <>
      <div className={`flex w-full flex-col`}>
        <Title t={texts} />

        <Filters t={texts} />

        <SelectedFilters t={texts} />
      </div>
    </>
  );
}
