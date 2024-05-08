export default function Title({ t }: any) {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center my-20 md:my-28`}
      >
        <h1 className={`text-5xl font-semibold uppercase`}>{t.inspiration}</h1>

        <h2 className={`text-lg font-normal mt-7`}>
          {t.workOnVokalInspiration}
        </h2>
      </div>
    </>
  );
}
