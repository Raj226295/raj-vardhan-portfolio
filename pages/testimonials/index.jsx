import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="min-h-full overflow-x-hidden bg-primary/30 pb-28 pt-36 text-center md:pt-40 xl:h-full xl:py-32">
      <div className="container mx-auto flex min-h-full flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          Client <span className="text-accent">Testimonials.</span>
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mx-auto mb-2 max-w-[620px] px-4 text-white/70"
        >
          Discover what clients say about my work, creativity, and commitment
          to delivering exceptional digital experiences.
        </motion.p>

        {/* testimonial slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
