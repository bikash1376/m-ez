"use client";

import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc, desc2, desc3 }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
        <br />
        <p className="leading-loose">{desc2}</p>
        <br />
        <p className="leading-loose">{desc3}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative container px-5 md:px-16 mx-auto">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        <div className="relative w-full flex-1">
          <Image
            src={"/videobanner.png"}
            width={500}
            height={500}
            alt="video banner"
            className="object-cover w-full"
          />
          <button className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href={"https://youtu.be/aVNa8Dka5MA"} target="_blank">
              <span className="playButton duration-700 w-full h-full bg-rose-500 rounded-full block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
              <PlayArrowIcon className="w-16 h-16 md:w-24 md:h-24 text-white bg-[#ffffffb8] rounded-full" />
            </Link>
          </button>
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">
            <span className="service-name text-center lg:text-left">
              About Math Easy
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
              How <span style={{ color: "#B5193C" }}>Math</span> Easy started?
            </h2>
          </div>
          <ServiceCard
            imgSrc={"/features/3.svg"}
            // title="Smart Features"
            desc="Founded in 2018, Math Easy is on a mission to make quality math education accessible to all. We offer personalized, one-on-one online tutoring for students across the globe, covering various curricula and grade levels."
            desc2="Our journey started with a simple belief: every student can excel in math with the right guidance. Today, we're a thriving global community of learners and expert tutors, united by our passion for mathematics and education."
            desc3="At Math Easy, we're not just teaching math - we're building confidence, problem-solving skills, and a foundation for future success."
            
          />
          <button className="capitalize text-sm sm:text-base border-2 hover:border-2 font-semibold sm:py-3 py-2 px-2 sm:px-4 text-rose-600 border-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:text-white rounded-full">
            <Link href={"/about-us"}>Discover Our Story</Link>
          </button>

          {/* <ServiceCard
            imgSrc={"/features/2.svg"}
            title="Secure Contents"
            desc="Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests."
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
