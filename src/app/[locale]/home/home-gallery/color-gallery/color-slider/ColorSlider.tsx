import Slider from '@/ui/design-system/slider/Slider';

export default function ColorSlider({ slider = [] }: { slider: string[] }) {
  return slider?.length < 1 ? (
    <></>
  ) : (
    <>
      <div>
        <Slider imagesx={slider} />
      </div>
    </>
  );
}
