import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Card = ({ star, title, imgSrc, description, reviewer}) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-rose-600">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">
     {description}
      </p>
      <div className="flex items-center gap-4 mt-5">
        <Image src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <h3 className="font-semibold">{reviewer}</h3>
          <Link
            href="/"
            target="_blank"
            className="text-rose-600 font-[500]"
          >
            @{reviewer}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="testimonials"
    >
      <div>
        <span className="service-name text-center ">TESTIMONIAL</span>
        <h2 className="title text-center ">Meet Client Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Transformative Tutoring Experience"
            imgSrc="/testimonials/1.png"
            description = " Math Easy turned my daughter's D's into A's in just one semester. The personalized attention made all the difference!"
            reviewer="Raj, UK"
          />
        </div>
        <div>
          <Card
            title="Seamless Curriculum Support for Expats"
            imgSrc="/testimonials/2.png"
            description="As an expat family, we struggled to find tutors who understood the IB curriculum. Math Easy solved that problem beautifully."
            reviewer="Sarah K., USA "
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Confidence Boost with Flexible Scheduling"
            imgSrc="/testimonials/3.png"
            description="The flexible scheduling allowed my son to get help despite the time difference. His confidence in math has soared!"
            reviewer="Tushar, Australia"
          />
        </div>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Math Made Fun and Engaging"
            imgSrc="/testimonials/4.png"
            description="I never thought I'd say this, but math is now my favorite subject, thanks to Math Easy.."
            reviewer="Ishaq Ahm, UAE"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
