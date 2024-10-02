'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    {/* Title Section */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center mb-8`} // Added margin bottom for space
    >
      <motion.h1
        variants={textVariant(1.1)}
        className={`${styles.heroHeading} text-pink-700 text-center text-[10px]`}
      >
        EmpowHER
      </motion.h1>
    </motion.div>

    {/* Main Content Section */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-row items-center justify-between`} // Flexbox to position items evenly
    >
      {/* Left side text box */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="w-full md:w-[50%] flex flex-col justify-center z-10 relative h-[400px] p-4" // Added padding for balance
      >
        <motion.p
          variants={textVariant(1.2)}
          className="mt-8 text-[18px] leading-[1.5] text-gray-700" // Increased margin-top for more gap
        >
          <span className="text-[24px] font-bold text-pink-700">
            EmpowHER: Not Just a Movement, It's a Revolution!
          </span>
          <br />
          EmpowHER is your ultimate space to unlock unstoppable potential, connect with fierce women, and lead with purpose. It's not just a website—it's a revolution of empowerment, where ambition meets action and confidence becomes contagious!
        </motion.p>

        {/* Robot Button and Pink Text Box */}
        <div className="flex mt-12 items-center space-x-8"> {/* Flex to align robot and text box, maintained gap */}
          {/* Robot Image (now without a link) */}
          <motion.div
            className="block"
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <img
              src="/bot3.png"
              alt="Jumping Robot"
              className="w-[250px] h-[250px] object-contain" // Increased size of the robot image to 250px
            />
          </motion.div>

          {/* Pink Text Box with Link */}
          <motion.a
            href="https://womens-health-assistant-chatbot.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            variants={slideIn('right', 'tween', 0.2, 1)}
          >
            <div className="bg-pink-600 text-white px-8 py-6 rounded-lg shadow-md text-[16px] font-semibold">
              Purr-suade to help you<br /> Click to find out more!
            </div>
          </motion.a>
        </div>
      </motion.div>

      {/* Right side image */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="w-full md:w-[50%] flex justify-center relative z-10 h-[400px] p-4" // Added padding for spacing
      >
        <img
          src="/cover8.png"
          alt="women health"
          className="w-full h-full object-cover rounded-[20px] shadow-lg" // Ensured full coverage of the image
        />

        {/* Explore Button */}
        <a href="#explore">
          <div className="absolute bottom-[-60px] right-[-40px]"> {/* Moved further to the bottom-right */}
            <img
              src="/explore_2.png"
              alt="explore"
              className="sm:w-[170px] w-[150px] sm:h-[170px] h-[150px] object-contain" // Increased size of the Explore button
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
