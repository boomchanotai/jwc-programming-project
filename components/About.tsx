import { FunctionComponent, RefObject } from "react";
import Image from "next/image";

interface Props {
  refElement: RefObject<HTMLDivElement>;
}

const About: FunctionComponent<Props> = ({ refElement }: Props) => {
  return (
    <div
      ref={refElement}
      className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-between items-start gap-12 py-16"
    >
      <div>
        <h1 className="text-2xl font-medium">ประวัติหมอหมึก</h1>
        <p className="mt-2">
          หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วยลูกแก้วพยากรณ์
          ไพ่ทาโร่ และการดูลายมือ
        </p>
        <p className="mt-4">
          ด้วยความสามารถที่หลากหลาย
          ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะกับแต่ละบุคคลเพื่อให้ได้ผลลัพธ์แม่นยำที่สุด
        </p>
      </div>
      <div className="w-full md:w-auto">
        <div className="relative w-64 aspect-[3/4] mx-auto">
          <Image
            src="/ajdaeng.jpeg"
            alt="about"
            layout="fill"
            objectFit="cover"
            objectPosition={"center"}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
