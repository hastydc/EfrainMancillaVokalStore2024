'use client';

export default function SubscribeText({ t }: any) {
  return (
    <>
      <div className={`flex flex-col md:max-w-md`}>
        <div className={`flex text-xl font-medium pb-3`}>{t.vokalTest}</div>

        <div className={`flex text-base font-normal`}>
          {
            t.subscribeToTheNewsletterToBeTheFirstToHearAboutVokalBrandUpdatesAndNews
          }
        </div>
      </div>
    </>
  );
}
