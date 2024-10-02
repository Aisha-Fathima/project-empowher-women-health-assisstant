'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10 bg-gray-900`} id="world">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="|EmpowHER Collective for Communities " textStyles="text-center text-white" />
      <TitleText
        title={(
          <>We connect women from all walks of life, across different cultures, ages, and backgrounds, creating a global community where personalized health insights empower each woman on her unique journey. <br /> <span className="text-yellow-200 text-lg md:text-xl font-semibold">Tap the icons to uncover diverse women's communities around the world!</span></>
        )}
        textStyles="text-center text-gray-300 text-base md:text-lg"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover opacity-80" />

        {/* Clickable image with onClick event */}
        <div
          className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-gray-700"
          onClick={() => window.open('https://qween.in/blog/women-empowerment/top-8-women-communities-that-every-woman-must-join', '_blank')}
          style={{ cursor: 'pointer' }} // Add cursor to indicate clickability
        >
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        {/* Another clickable image */}
        <div
          className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-gray-700"
          onClick={() => window.open('https://artsandculture.google.com/project/women-in-culture-community', '_blank')}
          style={{ cursor: 'pointer' }}
        >
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        {/* One more clickable image */}
        <div
          className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-gray-700"
          onClick={() => window.open('https://timespro.com/blog/8-women-communities-that-working-women-must-join', '_blank')}
          style={{ cursor: 'pointer' }}
        >
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div
          className="absolute top-[34%] left-[63%] w-[70px] h-[70px] p-[6px] rounded-full bg-gray-700"
          onClick={() => window.open('https://artsandculture.google.com/project/indias-women-in-culture', '_blank')} // Example link
          style={{ cursor: 'pointer' }}
        >
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
