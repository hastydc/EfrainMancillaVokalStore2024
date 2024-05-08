import Style from './menuIcon.module.scss';

export default function MenuIcon({ open }: any) {
  const lines: number[] = [1, 2, 3];

  return (
    <>
      <div className={`flex flex-col gap-1 w-full ${open ? Style.cross : ''}`}>
        {lines.map((line: number) => (
          <span
            className={`flex w-full h-0.5 relative transition ease-in-out delay-150 ${Style.line}`}
            key={`mbl-${line}`}
          />
        ))}
      </div>
    </>
  );
}
