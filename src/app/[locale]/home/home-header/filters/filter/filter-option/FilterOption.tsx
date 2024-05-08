import Style from './filterOption.module.scss';

export default function FilterOption({ data }: any) {
  return (
    <>
      <div className={`flex flex-row gap-3 items-center justify-center`}>
        <div
          className={`flex w-full ${Style.filterColor} ${
            !data.color ? 'hidden' : ''
          }`}
          style={{ backgroundColor: data.color }}
        />
        <div className={`flex font-regular uppercase`}>{data.label}</div>
      </div>
    </>
  );
}
