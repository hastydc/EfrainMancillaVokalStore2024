import Style from './loader.module.scss';

export default function Loader() {
  return (
    <>
      <div className={`${Style.loader} flex self-center w-full`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
