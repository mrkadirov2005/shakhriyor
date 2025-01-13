import "./responsive.css";

export default function Tests() {
    return (
        <section className="flex flex-col pt-10">
            <h1 className="w-fit flex items-center justify-center text-4xl bg-opacity-95 rounded-lg pl-5 pr-5 pt-2 pb-2 bg-orange-600 ml-auto mr-auto hover:bg-green-700 active:bg-green-900 transition-colors duration-300">
                Bizdagi Testlar
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 sm:mt-10 text-white">
                {/* IT Test */}
                <div id="subject_container" className="px-12 py-7 rounded-3xl w-96 bg-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-700">
                    <span className="bg-green-500 p-3 rounded-xl">IT TEST</span>
                    <p className="text-xl my-6">
                        Axborot texnologiyalari bo'yicha bilimlaringizni baholash uchun mo'ljallangan test.
                    </p>
                    <p className="flex items-center m-2 ml-0">
                        <img className="mr-1" width={20} src="/check.png" alt="" />
                        Asosiy dasturlash tushunchalari va kodlash savollari
                    </p>
                    <p className="flex items-center m-2 ml-0">
                        <img className="mr-1" width={20} src="/check.png" alt="" />
                        IT terminologiyasi va mantiqiy masalalar
                    </p>
                </div>

                {/* Math Test */}
                <div id="subject_container" className="px-12 py-7 rounded-3xl w-96 bg-blue-900 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-800">
                    <span className="bg-green-500 p-3 rounded-xl">MATEMATIKA TESTI</span>
                    <p className="text-xl my-6">
                        Matematik bilimlaringizni sinash va qobiliyatingizni aniqlash uchun test.
                    </p>
                    <p className="flex items-center m-2 ml-0">
                        <img className="mr-1" width={20} src="/check.png" alt="" />
                        Algebra, geometriya va arifmetikadan savollar
                    </p>
                    <p className="flex items-center m-2 ml-0">
                        <img className="mr-1" width={20} src="/check.png" alt="" />
                        Masalalar va mantiqiy fikrlash mashqlari
                    </p>
                </div>

                {/* IQ Test */}
                <div id="subject_container" className="px-12 py-7 rounded-3xl w-96 bg-violet-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-violet-600">
                    <span className="bg-green-500 p-3 rounded-xl">IQ TESTI</span>
                    <p className="text-xl my-6">
                        Mantiqiy fikrlash va muammolarni yechish qobiliyatingizni aniqlash uchun test.
                    </p>
                    <p className="flex items-center m-2 ml-0">
                        <img className="mr-1" width={20} src="/check.png" alt="" />
                        Mantiq, qiyoslash va raqamli naqshlar savollari
                    </p>
                    <p className="flex items-center m-2 ml-0">
                        <img className="mr-1" width={20} src="/check.png" alt="" />
                        Murakkablik darajasi osondan murakkabgacha
                    </p>
                </div>

                {/* English Test */}
                <div id="subject_container" className="px-12 py-7 rounded-3xl w-96 bg-teal-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-teal-600">
                    <span className="bg-green-500 p-3 rounded-xl">ENGLISH TEST</span>
                    <p className="text-xl my-6">
                        Ingliz tilidagi bilimlaringizni tekshirish va darajangizni baholash uchun test.
                    </p>
                    <p className="flex items-center m-2 ml-0">
                        <img className="mr-1" width={20} src="/check.png" alt="" />
                        Grammar, vocabulary va reading savollari
                    </p>
                    <p className="flex items-center m-2 ml-0">
                        <img className="mr-1" width={20} src="/check.png" alt="" />
                        Boshlang'ichdan ilg'or darajagacha savollar
                    </p>
                </div>

                {/* Uzbek Test */}
                <div id="subject_container" className="px-12 py-7 rounded-3xl w-96 bg-orange-500 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-orange-400">
                    <span className="bg-green-500 p-3 rounded-xl">O'ZBEK TILI TESTI</span>
                    <p className="text-xl my-6">
                        O'zbek tilida yozish, o'qish va grammatika bilimlaringizni sinash uchun test.
                    </p>
                    <p className="flex items-center m-2 ml-0">
                        <img className="mr-1" width={20} src="/check.png" alt="" />
                        Morfologiya va sintaksis savollari
                    </p>
                    <p className="flex items-center m-2 ml-0">
                        <img className="mr-1" width={20} src="/check.png" alt="" />
                        Mavzular: yozma va og'zaki nutq
                    </p>
                </div>
            </div>
        </section>
    );
}
