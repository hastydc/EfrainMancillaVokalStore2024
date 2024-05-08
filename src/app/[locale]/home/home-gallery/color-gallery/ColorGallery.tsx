import ColorPantone from './color-pantone/ColorPantone';
import ColorSlider from './color-slider/ColorSlider';

export default function ColorGallery({
  data,
  slider,
  t,
}: {
  data: any;
  t: any;
  slider: string[];
}) {
  return (
    <>
      <div className={`flex flex-col gap-12 w-full`}>
        <ColorSlider slider={slider} />

        <ColorPantone t={t} data={data} />
      </div>
    </>
  );
}
