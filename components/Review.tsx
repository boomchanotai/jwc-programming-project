import type { FunctionComponent, RefObject } from "react";
import Image from "next/image";

interface Props {
  refElement: RefObject<HTMLDivElement>;
}

const Review: FunctionComponent<Props> = ({ refElement }: Props) => {
  const reviews = [
    {
      name: "แมทธิว นักธุรกิจ",
      image: "/witthaya.jpeg",
      comment:
        "หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลย ตอนนี้ขายดีเทน้ำเทท่าเลยครับ",
    },
    {
      name: "แจ็ค นักแสดง",
      image: "/ruang.jpeg",
      comment:
        "ต้องขอบคุณหมอหมึกในการช่วยให้ความสัมพันธ์ราบรื่นด้วยนะคะ ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ",
    },
    {
      name: "น้ำใส นักศึกษา",
      image: "/leena.jpeg",
      comment:
        "ที่หมอหมึกบอกมานะคะ เกิดเกือบหทดเลยค่ะ ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ ดีนะที่ป้องกันเรื่องร้าย ๆ ทันเวลา",
    },
  ];

  return (
    <div
      ref={refElement}
      className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 py-16"
    >
      <h1 className="text-center text-2xl mb-8">รีวิวจากลูกค้า</h1>
      <div className="grid md:grid-cols-3 gap-12">
        {reviews.map((review, i) => (
          <div key={i} className="flex flex-col justify-center mx-4 md:mx-0">
            <div className="relative w-40 aspect-square mx-auto">
              <Image
                src={review.image}
                alt={review.name}
                layout="fill"
                className="rounded-full"
                objectFit="cover"
                objectPosition={"center"}
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-medium mb-4">{review.name}</h3>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
