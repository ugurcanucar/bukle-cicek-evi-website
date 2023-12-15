"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Bad_Script } from "next/font/google";
import { motion } from "framer-motion";
const mali = Bad_Script({ subsets: ["latin"], weight: ["400"] });

const HeroInformation = () => {
  return (
    <div className={styles.hero_information_wrapper}>
      <div className={styles.information_wrapper}>
        <div className={styles.hero_information}>
          <motion.h3
            initial={{opacity:0}}
            animate={{ x: [50,0],opacity:[0,1] }}
            transition={{ ease: "easeOut", duration:1.5 }}
            className={`${mali.className} ${styles.title}`}
          >
            ZARAFET
          </motion.h3>
          <motion.h2
          animate={{ x: [100,0],opacity:[0,1] }}
          initial={{opacity:0}}
          transition={{ delay:1.5, ease: "easeOut", duration: 1.2 }}
          className={styles.sub_title}>Doğanın Zarif Dokunuşu</motion.h2>
          <motion.p 
          animate={{ y: [100,0],opacity:[0,1] }}
          initial={{opacity:0}}
          transition={{ delay:1.6, ease: "easeOut", duration: 1.2 }}
          className="text-gray-800">
            Antalya'nın eşsiz güzellikleriyle bezeli çiçeklerimizi, sadece sizin
            için özel tasarımlarla buluşturuyoruz. Müşteri memnuniyetini en üst
            düzeyde tutarak, bu muazzam deneyimi ve Antalya'dan ücretsiz kargo
            fırsatıyla kapınıza getiriyoruz. Doğanın büyüsünü uygun fiyatlarla
            yaşayın, çünkü sizin{" "}
            <motion.span
             transition={{ delay:1.6, ease: "easeOut", duration: 1.2 }}
             animate={{ opacity:[0,1] }}
            className={styles.line}>memnuniyetiniz</motion.span> bizim
            önceliğimiz!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroInformation;
