import SubscribeForm from './subscribe-form/SubscribeForm';
import SubscribeText from './subscribe-text/SubscribeText';

export default function Subscribe({ t }: any) {
  return (
    <>
      <div className={`flex flex-col`}>
        <div className={`flex`}>
          <SubscribeText t={t} />
        </div>
        <div className={`flex`}>
          <SubscribeForm t={t} />
        </div>
      </div>
    </>
  );
}
