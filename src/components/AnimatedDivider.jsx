import { motion } from "framer-motion";

const AnimatedDivider = ({ top_color, bottom_color }) => {
  //   // Path A: Your original high-frequency wave
  //   const pathA =
  //     "M0 60 C60 20 120 20 180 60 C240 100 300 100 360 60 C420 20 480 20 540 60 C600 100 660 100 720 60 C780 20 840 20 900 60 C960 100 1020 100 1080 60 C1140 20 1200 20 1260 60 C1320 100 1380 100 1440 60 V0H0V60Z";

  //   // Path B: The "Inverted" wave (swapping 20s and 100s) to create motion
  //   const pathB =
  //     "M0 60 C60 100 120 100 180 60 C240 20 300 20 360 60 C420 100 480 100 540 60 C600 20 660 20 720 60 C780 100 840 100 900 60 C960 20 1020 20 1080 60 C1140 100 1200 100 1260 60 C1320 20 1380 20 1440 60 V0H0V60Z";

  //   // Stroke paths need to match for the bold line
  //   const strokeA =
  //     "M0 60 C60 20 120 20 180 60 C240 100 300 100 360 60 C420 20 480 20 540 60 C600 100 660 100 720 60 C780 20 840 20 900 60 C960 100 1020 100 1080 60 C1140 20 1200 20 1260 60 C1320 100 1380 100 1440 60";
  //   const strokeB =
  //     "M0 60 C60 100 120 100 180 60 C240 20 300 20 360 60 C420 100 480 100 540 60 C600 20 660 20 720 60 C780 100 840 100 900 60 C960 20 1020 20 1080 60 C1140 100 1200 100 1260 60 C1320 20 1380 20 1440 60";

  return (
    <div className={`w-full leading-[0] bg-[${bottom_color}]`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          d="M0 60 

         C60 20 120 20 180 60 C240 100 300 100 360 60
         C420 20 480 20 540 60 C600 100 660 100 720 60
         C780 20 840 20 900 60 C960 100 1020 100 1080 60
         C1140 20 1200 20 1260 60 C1320 100 1380 100 1440 60
         V0H0V60Z"
          fill={`${top_color}`}
        />

        <path
          d="M0 60 
         C60 20 120 20 180 60 C240 100 300 100 360 60
         C420 20 480 20 540 60 C600 100 660 100 720 60
         C780 20 840 20 900 60 C960 100 1020 100 1080 60
         C1140 20 1200 20 1260 60 C1320 100 1380 100 1440 60"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default AnimatedDivider;
