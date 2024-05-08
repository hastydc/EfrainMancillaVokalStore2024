import Style from './logo.module.scss';

export default function Logo({}: any) {
  return (
    <>
      <h1
        className={`font-semibold text-2xl md:text-4xl relative ${Style.title}`}
      >
        VOKAL TEST
      </h1>
    </>
  );
}
