import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">Why Choose Us?</span>
      <h2 className="title text-center">Meet the feature of product</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Personalized Attention"
          desc="Our 1-on-1 sessions ensure each student receives undivided attention, addressing their unique learning needs and pace."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Curriculum Flexibility"
          desc="We cater to various international curricula, ensuring seamless alignment with your school's requirements."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Qualified Tutors"
          desc="Our tutors are not just math experts but also skilled educators, trained to make complex concepts easy to understand."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Flexible Scheduling"
          desc="With tutors across time zones, we offer sessions that fit your busy lifestyle, any time, anywhere."
        />
      </div>
    </section>
  );
};

export default Features;
