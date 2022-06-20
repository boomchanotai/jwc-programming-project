import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  setOpenAppointment: (openAppointment: boolean) => void;
}

const Appointment: FunctionComponent<Props> = ({
  setOpenAppointment,
}: Props) => {
  const [name, setName] = useState<string>("");
  const [appointmentTime, setAppointmentTime] = useState<string>("");
  const [appoint, setAppoint] = useState<object[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem(
      "appointment",
      JSON.stringify([...appoint, { name, appointmentTime }])
    );
    setOpenAppointment(false);
  };

  useEffect(() => {
    setAppoint(JSON.parse(localStorage.getItem("appointment") || "[]"));
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center p-8 z-[200] opacity-100 scale-100 bg-black bg-opacity-40 text-black">
      <div className="flex flex-col justify-between w-full lg:w-1/2 relative rounded-2xl overflow-hidden">
        <div className="bg-white space-y-8 p-8 mx-auto min-h-[50vh] max-h-[calc(100vh_-_72px)] overflow-y-scroll w-full">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-2xl font-medium">จองคิวหมอหมึก</h2>
            <button
              onClick={() => setOpenAppointment(false)}
              className="flex flex-col justify-center items-center rounded-lg"
            >
              <Image src="/close-black.svg" alt="menu" width={25} height={25} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                ชื่อ - สกุล
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="shadow-sm focus:ring-midnight focus:border-midnight block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="นายวัชรพล สุขสวัสดิ์"
                  onChange={(event: any) => setName(event.target.value)}
                />
              </div>
            </div>
            <div className="my-4">
              <label
                htmlFor="schedule"
                className="block text-sm font-medium text-gray-700"
              >
                วันที่ - เวลา
              </label>
              <div className="mt-1">
                <input
                  required
                  type="datetime-local"
                  name="schedule"
                  id="schedule"
                  className="shadow-sm focus:ring-midnight focus:border-midnight block w-full sm:text-sm border-gray-300 rounded-md"
                  onChange={(event: any) =>
                    setAppointmentTime(event.target.value)
                  }
                />
              </div>
            </div>
            <div className="my-4">
              <button className="bg-midnight w-full py-2 text-white text-sm rounded">
                นัดเวลา
              </button>
            </div>
          </form>
          {appoint.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-2 text-center">นัดหมาย</h3>
              <div className="overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th>ลำดับ</th>
                      <th>เวลา</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appoint.map((item: any, index: number) => (
                      <tr key={index} className="even:bg-gray-100">
                        <td className="text-center py-1">{index + 1}</td>
                        <td className="py-1">
                          {new Date(item.appointmentTime).toLocaleTimeString(
                            "th-TH",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              weekday: "long",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Appointment;
