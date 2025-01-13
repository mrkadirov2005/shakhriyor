"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactButton from "../ContactButton/ContactButton";
import styles from "./responsive.module.css";

export default function FooterComp() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <motion.footer
      className={`flex items-center relative justify-center flex-col bg-violet-900 mt-32 pt-16 w-full h-fit p-14 ${styles.res_footer}`}
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.section
        className={`flex items-center justify-between bg-violet-800 w-4/5 p-8 rounded-2xl shadow-lg absolute ${styles.res_float}`}
        variants={itemVariants}
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl font-semibold">Kutmang</h1>
          <p className="text-gray-400">
            Biz sizga eng yaxshi natijalarga erishishingizga yordam<br />
            berish uchun doim siz bilanmiz. Eng yuqori maqsadni<br />
            qo'ying - hoziroq bepul sinov darsiga yoziling.
          </p>
        </motion.div>
        <motion.div className="mt-5" variants={itemVariants}>
          <ContactButton />
        </motion.div>
      </motion.section>

      <motion.section
        className={`flex items-start justify-between w-full border-b-2 border-gray-500 pb-5 ${styles.res_footer}`}
        variants={sectionVariants}
      >
        <motion.div className={styles.footer_container} variants={itemVariants}>
          <h1 className="text-3xl pb-0 font-semibold text-yellow-500">TEMURBEK SCHOOL</h1>
          <p className="mt-2 text-gray-400 mb-5">
            TEMURBEK SCHOOL: O'zbekistonning eng yuqori IELTS<br />
            o'qituvchilari uyi, 7.5 ball olganlar va CEFR sertifikatiga<br />
            ega o'qituvchilar soni bo'yicha yetakchi. Biz barcha<br />
            darajadagi talabalarga ilg'or, talabaga yo'naltirilgan<br />
            IELTS tayyorgarligini taqdim etamiz.
          </p>
          <ContactButton />
        </motion.div>

        <motion.div className={styles.footer_container} variants={itemVariants}>
          <h1 className="text-xl font-semibold">Aloqaga chiqing</h1>
          <p className="mt-2 text-gray-400">+998 97 912-29-95</p>
          <p className="text-gray-400">Telegram</p>
        </motion.div>

        <motion.div className={styles.footer_container} variants={itemVariants}>
          <h1 className="text-xl font-semibold">TEMURBEK SCHOOL</h1>
          <p className="mt-2 text-gray-400">Biz haqimizda</p>
          <p className="text-gray-400">O'qituvchilar</p>
          <p className="text-gray-400">Kurslar</p>
          <p className="text-gray-400">Natijalar</p>
          <p className="text-gray-400">Mock imtihonlar</p>
          <div className="flex items-center gap-2.5">
            <img width={35} src="/youtube.png" alt="YouTube" />
            <img width={35} src="/instagram.png" alt="Instagram" />
            <img width={35} src="/telegram.png" alt="Telegram" />
          </div>
        </motion.div>
      </motion.section>

      <motion.hr variants={itemVariants} />
      <motion.p className="text-start" variants={itemVariants}>
        Copyright © 2024. All Rights Reserved.
      </motion.p>
    </motion.footer>
  );
}
