import { FunctionComponent, RefObject } from "react";
import Image from "next/image";

interface Props {
  refElement: RefObject<HTMLDivElement>;
}

const Contact: FunctionComponent<Props> = ({ refElement }: Props) => {
  return (
    <div
      ref={refElement}
      className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 py-16 flex flex-col-reverse md:flex-row gap-12"
    >
      <div className="relative w-full md:w-96 aspect-square">
        <Image src="/map.png" alt="Contact" layout="fill" />
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-medium">ทำนายชะตากับหมอหมึก</h2>
        <div className="my-4">
          สามารถจองคิวได้ในเว็บหรือ <br />
          อีเมล: octopus_fortune@teller.com <br />
          โทรศัพท์: 099 XXX XXXX <br />
          และมาที่สำนักที่ <br />
          ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ
          99999 ตามเวลาที่นัดไว้
        </div>
        <div className="my-4">
          จำกัดคิว 10 คิดต่อหนึ่งวัน เปิดทำการ <br />
          10.00 - 18.30 น. พัก 12.00 - 13.00 น. <br />
          เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์
        </div>
      </div>
    </div>
  );
};
export default Contact;
