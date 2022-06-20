import type { FunctionComponent, RefObject } from "react";

interface Props {
  refElement: RefObject<HTMLDivElement>;
}

const Hero: FunctionComponent<Props> = ({ refElement }: Props) => {
  return (
    <div
      ref={refElement}
      className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 flex flex-col justify-center items-center py-16"
    >
      <h1 className="text-7xl">หมอหมึก</h1>
      <div className="mt-6 mb-12 text-center">
        ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ
      </div>
      <div>
        <button className="py-4 px-12 text-midnight bg-white text-2xl">
          จองคิว
        </button>
      </div>
    </div>
  );
};

export default Hero;
