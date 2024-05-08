import { MenuRoute } from '@/core/menuRoute.enum';
import HomeLink from './home-link/HomeLink';
import Style from './homeLinks.module.scss';
import { useTranslations } from 'next-intl';

export default function HomeLinks() {
  const t = useTranslations();

  return (
    <>
      <div className={`flex flex-col md:flex-row`}>
        <div className={`flex md:basis-1/2`}>
          <HomeLink
            question={t('lookingForDesignInput')}
            answer={t('getAdviceFromVokalCurators')}
            link={MenuRoute.HOME}
          />
        </div>

        <div className={`flex md:basis-1/2 ${Style.border}`}>
          <HomeLink
            question={t('areYouAnInteriorDesigner')}
            answer={t('learnAboutCollaboratingWithThreshold')}
            link={MenuRoute.HOME}
          />
        </div>
      </div>
    </>
  );
}
