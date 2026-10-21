import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { assetUrl } from "../lib/assetUrl";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const projects = [
  {
    title: "House of Tattva",
    path: "/thumb1.jpg",
    link: "https://www.thehouseoftattva.com/",
  },
  {
    title: "ARYASS",
    path: "/thumb2.jpg",
    link: "https://aryass.com/",
  },
  {
    title: "PK Business Solution",
    path: "/thumb3.jpg",
    link: "https://pkbusinesssolution.in/",
  },
  {
    title: "Ayush Kursela",
    path: "/thumb4.jpg",
    link: "https://ayushkursela.com/",
  },
];

const figmaLinks = [
  "https://www.figma.com/design/fLT8K1Pnz4rWlfHYODtqNg/Meena-Makhana?node-id=0-1&t=XBONcF6qGPKKKvdO-1",
  "https://www.figma.com/design/R6ORgfaxYsxazWNjWXT2Tc/6-SEM-E-learning?t=XBONcF6qGPKKKvdO-1",
  "https://www.figma.com/design/0F6JlKwfifPjKwnjqJJZyC/Untitled?node-id=0-1&t=XBONcF6qGPKKKvdO-1",
  "https://www.figma.com/design/gFZriVvWvtUhTWZaiRIn9R/Gym-page?t=XBONcF6qGPKKKvdO-1",
];

const workSlides = [
  projects,
  [projects[3], projects[0], projects[1], projects[2]].map(
    (project, index) => ({
      ...project,
      link: figmaLinks[index],
    })
  ),
];

const WorkSlider = () => {
  return (
    <Swiper
      id="projects"
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-full !pb-10 sm:h-[480px]"
    >
      {workSlides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2">
            {slide.map((project) => (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live project`}
                className={`group relative block min-w-0 overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent${
                  slideIndex === workSlides.length - 1
                    ? " cursor-pointer"
                    : ""
                }`}
                key={project.title}
              >
                  <Image
                    src={assetUrl(project.path)}
                    alt={`${project.title} website homepage`}
                    width={500}
                    height={300}
                    sizes="(max-width: 639px) calc(100vw - 30px), (max-width: 1199px) 45vw, 32vw"
                    className="block h-auto w-full object-contain"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 transition-all duration-700 group-hover:opacity-80 group-focus-within:opacity-80"
                    aria-hidden="true"
                  />

                  <div className="absolute bottom-3 right-3 rounded-full bg-accent px-3 py-2 shadow-lg sm:bottom-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-full sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:transition-all sm:duration-300 sm:group-hover:-translate-y-10 sm:group-focus-visible:-translate-y-10 sm:group-hover:xl:-translate-y-20 sm:group-focus-visible:xl:-translate-y-20">
                    <div className="flex items-center gap-x-2 whitespace-nowrap text-[13px] tracking-[0.2em]">
                      <div className="delay-100">LIVE</div>
                      <div className="sm:translate-y-[500%] sm:transition-all sm:delay-150 sm:duration-300 sm:group-hover:translate-y-0 sm:group-focus-visible:translate-y-0">
                        PROJECT
                      </div>
                      <div className="text-xl sm:translate-y-[500%] sm:transition-all sm:delay-150 sm:duration-300 sm:group-hover:translate-y-0 sm:group-focus-visible:translate-y-0">
                        <BsArrowRight aria-hidden="true" />
                      </div>
                    </div>
                  </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
