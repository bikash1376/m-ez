import Image from "next/image";

const QualityFeature = ({ imgSrc, title,}) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          American Common Core
        </h3>
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          British (GCSE & A-Levels)
        </h3>
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          International Baccalaureate (IB)
        </h3>
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          Canadian & Australian
        </h3>
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          Indian (CBSE & ICSE)
        </h3>
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          Singapore Math
        </h3>
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          Other international curricula upon request
        </h3>

        {/* <p>{desc}</p> */}
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16">
      <span className="service-name text-center ">Curriculum</span>
      <h2 className="title text-center ">Curricula We Cover</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          desc="Let's just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world."
        />
        {/* <QualityFeature
          imgSrc="/features/2.svg"
          title="Partnership deal"
          desc="Let's just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Pro Subscription"
          desc="Let's just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="Let's just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world."
        /> */}
      </div>
    </section>
  );
};

export default QualityFeatures;
