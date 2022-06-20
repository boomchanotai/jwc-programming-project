import type { NextPage } from "next";
import { useRef, useState } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Review from "../components/Review";
import Contact from "../components/Contact";
import Appointment from "../components/Appointment";

const Home: NextPage = () => {
  const hero = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const review = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const [openAppointment, setOpenAppointment] = useState(false);

  return (
    <div>
      <Head>
        <title>หมอหมึก - สำนักดูดวงที่แม่นที่สุดในประเทศไทย</title>
        <meta name="description" content="ชโณทัย กระแจ่ม" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-white min-h-screen">
        <Navbar reference={{ hero, about, review, contact }} />
        <Hero refElement={hero} setOpenAppointment={setOpenAppointment} />
        <About refElement={about} />
        <Review refElement={review} />
        <Contact refElement={contact} />
        {openAppointment && (
          <Appointment setOpenAppointment={setOpenAppointment} />
        )}
      </main>
    </div>
  );
};

export default Home;
