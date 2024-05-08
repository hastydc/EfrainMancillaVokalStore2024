export default function Pantone({ label, t }: any) {
  return (
    <>
      <div className={`flex flex-col bg-vokal-white p-4 self-end w-full`}>
        <div className={`font-bold uppercase`}>{t.pantone}</div>
        <div className={`font-regular`}>{label} C</div>
      </div>
    </>
  );
}
