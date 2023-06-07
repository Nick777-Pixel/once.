"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const Line = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true });
  return (
    <motion.svg
      className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      viewBox="0 0 80 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="80"
      height="16"
      ref={ref}
    >
      <motion.path
        d="M74.5815 11.4427C72.258 11.4427 69.4013 8.42846 69.2798 8.30105C67.9756 6.78413 66.6561 5.43495 64.7154 5.43495C62.588 5.43495 60.0887 8.26052 60.0626 8.28866L59.8463 8.52446C58.4684 10.0248 57.1669 11.4426 54.8493 11.4426C52.5258 11.4426 49.6691 8.42835 49.5476 8.30094C48.2434 6.78402 46.9239 5.43484 44.9832 5.43484C42.8558 5.43484 40.3565 8.26039 40.3304 8.28853L40.1265 8.50339C38.553 10.1455 37.3111 11.4425 35.1178 11.4425C32.7935 11.4425 29.9363 8.4282 29.8161 8.30079C28.5111 6.78387 27.1909 5.43469 25.2517 5.43469C23.1243 5.43469 20.625 8.26024 20.5989 8.28839L20.3804 8.52639C19.0037 10.026 17.7017 11.4416 15.3846 11.4416C13.0604 11.4416 10.2032 8.42731 10.083 8.2999C8.77799 6.78298 7.45778 5.4338 5.51852 5.4338C3.58704 5.4338 1.82704 6.495 0.923702 8.20361C0.811578 8.41772 0.545371 8.49948 0.330537 8.38663C0.116426 8.27233 0.0346651 8.00757 0.148243 7.79346C1.20437 5.79772 3.26158 4.55643 5.51787 4.55643C7.82769 4.55643 9.36121 6.11604 10.7342 7.71253C11.4706 8.49596 13.7695 10.5635 15.384 10.5635C17.3162 10.5635 18.3823 9.40244 19.7328 7.93253L19.9448 7.70177C20.0497 7.5817 22.7284 4.55659 25.25 4.55659C27.5598 4.55659 29.0934 6.1162 30.4663 7.7127C31.2026 8.49613 33.5017 10.5636 35.1161 10.5636C36.9347 10.5636 37.9524 9.50242 39.4919 7.89585L39.6843 7.69476C39.7834 7.58046 42.4621 4.55606 44.983 4.55606C47.2941 4.55606 48.8278 6.11567 50.1993 7.71216C50.9358 8.49414 53.2346 10.5623 54.8491 10.5623C56.7821 10.5623 57.8496 9.40061 59.2009 7.92846L59.4115 7.69987C59.5163 7.57979 62.195 4.55469 64.7154 4.55469C67.0265 4.55469 68.5602 6.1143 69.9317 7.71079C70.668 8.49277 72.9671 10.561 74.5815 10.561C76.4341 10.561 78.1593 9.56272 79.0859 7.95616C79.2067 7.74566 79.4743 7.67261 79.6856 7.79485C79.8954 7.91566 79.9671 8.18403 79.8469 8.39381C78.7632 10.276 76.7458 11.4429 74.5813 11.4429L74.5815 11.4427Z"
        initial="hidden"
        variants={variants}
        animate={inview ? "visible" : "hidden"}
        stroke="hsl(0, 0%, 31.2%)"
        strokeLinecap="round"
        fill="none"
      />
    </motion.svg>
  );
};
