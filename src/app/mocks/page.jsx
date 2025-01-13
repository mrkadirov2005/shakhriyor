'use client';
import { motion } from "framer-motion";
import ContactButton from '../components/ContactButton/ContactButton';

export default function MocksPage() {

  return (
    <div>
      <motion.section
        className="flex flex-col lg:flex-row items-center justify-between px-5 lg:px-20 py-16 lg:py-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center lg:text-left w-auto lg:w-3/5">
          <h1 className="text-xl lg:text-2xl">Temurbek School ga xush kelibsiz!</h1>
          <p className="text-3xl lg:text-5xl my-5">Biz bilan yangi cho'qqilarni <br /> zabt eting!</p>
          <p className="mb-4 text-sm lg:text-base">
            Bizning tajribamiz va innovatsion yondashuvlarimiz yordamida o'z imkoniyatlaringizni yana bir bor
            sinab ko'ring, yangi cho'qqilarni zabt eting va o'z oldingizga qo'ygan maqsadlarga yanada ishonch
            bilan intiling. Har bir qadamda siz bilan birga bo'lamiz!
          </p>
          <ContactButton />
        </div>
        <motion.img
          src="mock-image1.jpg"
          alt="Welcome"
          width={500}
          className="rounded-3xl mt-8 lg:mt-0 w-full max-w-sm lg:max-w-md"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.section>

      <motion.section
        className="px-5 lg:px-20 pt-14 lg:scroll-py-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-xl w-full text-center px-5 py-6 bg-opacity-45 bg-violet-500 rounded-md mb-5">Mock Imtihon Atmosferasi</p>
        <div className="flex flex-wrap items-center justify-center gap-7">
          <img className="h-56" src="mock-image8.jpg" alt="" />
          <img className="h-56" src=" mock-image2.jpg" alt="" />
          <img className="h-56" src="mock-image3.jpg" alt="" />
          <img className="h-56" src="mock-image4.jpg" alt="" />
          <img className="h-56" src="mock-image5.jpg" alt="" />
          <img className="h-56" src="mock-image6.jpg" alt="" />
          <img className="h-56" src="mock-image7.jpg" alt="" />
          <img className="h-56" src="mock-image1.jpg" alt="" />
        </div>
      </motion.section>

      <motion.section
        className="px-5 lg:px-20 pt-10 lg:py-20 flex items-center flex-col"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="w-auto p-3 rounded-xl mb-5 mt-10 text-center bg-blue-800 bg-opacity-50">🚀Nima uchun aynan Temurbek School ni tanlashingiz kerak?🚀</p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:scale-105">
          {[
            { title: "Haqiqiy IELTS imtihoni atmosferasi", desc: "IELTS ZONE siz uchun haqiqiy IELTS imtihon atmosferasini yaratadi." },
            { title: "Real exam materiallar", desc: "O'quvchilar haqiqiy IELTS imtihonida tushgan materiallarni bajaradi." },
            { title: "WRITING ekspertlari", desc: "Writinglarni IELTS imtihonidan yuqori ball olgan examinerlar baholaydi." },
            { title: "Listening uchun quloqchinlar", desc: "Har bir o'quvchi zamonaviy quloqchinlar bilan ta'minlanadi." },
            { title: "SPEAKING ekspertlari", desc: "Speakingdan imtihonni yuqori ball olgan examinerlar oladi." },
            { title: "Individual Feedback folder", desc: "Har bir o'quvchi examinerlardan Feedback Folderga ega bo'ladi." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col justify-start rounded-2xl w-full lg:w-96 h-auto p-4 border border-slate-500"
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="text-lg lg:text-xl mb-1">{item.title}</h1>
              <p className="text-sm lg:text-base text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}