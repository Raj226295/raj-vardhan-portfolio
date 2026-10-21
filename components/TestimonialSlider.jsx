import Image from "next/image";
import { BsQuote, BsStarFill } from "react-icons/bs";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { assetUrl } from "../lib/assetUrl";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    image: "/t-avt-1.png",
    name: "Rahul Sharma",
    profession: "Business Owner",
    review:
      "Excellent work! The website looks modern, professional, and works smoothly across all devices. The attention to detail and overall user experience exceeded my expectations.",
  },
  {
    image: "/t-avt-2.png",
    name: "Priya Verma",
    profession: "Entrepreneur",
    review:
      "A fantastic experience from start to finish. The design is clean, attractive, and perfectly represents my business. Communication was smooth, and the final result was impressive.",
  },
  {
    image: "/t-avt-3.png",
    name: "Aman Gupta",
    profession: "Digital Creator",
    review:
      "Really impressed with the creativity and technical skills. Every section was thoughtfully designed, the animations feel premium, and the website performs beautifully.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      loop
      autoHeight
      grabCursor
      speed={650}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Keyboard, Navigation, Pagination]}
      className="highlight-swiper w-full !pb-12 md:!pb-10"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.name}>
          <div className="flex flex-col items-center justify-center gap-8 px-12 pb-4 pt-2 sm:px-16 md:min-h-[400px] md:flex-row md:gap-x-10 md:px-20 md:py-6 xl:gap-x-16">
            <div className="testimonial-avatar relative aspect-square w-[180px] shrink-0 overflow-hidden rounded-full border-2 border-accent/60 shadow-[0_0_45px_rgba(241,48,36,0.2)] sm:w-[210px] md:w-[240px] xl:w-[280px]">
              <Image
                src={assetUrl(testimonial.image)}
                alt={`${testimonial.name}, ${testimonial.profession}`}
                fill
                priority={testimonial.name === "Rahul Sharma"}
                sizes="(max-width: 639px) 180px, (max-width: 767px) 210px, (max-width: 1199px) 240px, 280px"
                className="object-cover"
              />
            </div>

            <div className="relative flex min-w-0 max-w-[560px] flex-1 flex-col justify-center text-center md:min-h-[280px] md:border-l md:border-white/20 md:pl-10 md:text-left xl:pl-16">
              <BsQuote
                aria-hidden="true"
                className="absolute -top-2 right-0 text-5xl text-accent/20 md:top-2 xl:text-6xl"
              />

              <p className="testimonial-label mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Client Feedback
              </p>

              <div
                className="testimonial-rating mb-4 flex justify-center gap-1 text-sm text-accent md:justify-start"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <BsStarFill key={index} aria-hidden="true" />
                ))}
              </div>

              <blockquote className="testimonial-review mb-5 text-base leading-relaxed text-white/80 sm:text-lg xl:text-xl xl:leading-relaxed">
                &ldquo;{testimonial.review}&rdquo;
              </blockquote>

              <div className="testimonial-author">
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {testimonial.name}
                </h3>
                <p className="mt-1 text-sm text-white/50">
                  {testimonial.profession}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
