
import MainTitle from "./MainTitle";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { GiTeacher, GiDoctorFace, GiGraduateCap } from "react-icons/gi";
import { MdEngineering, MdBusinessCenter } from "react-icons/md";

const Testimonials = () => {
  const dataOfTestimonials = [
    {
      id: 1,
      name: "أحمد متولي",
      role: "مهندس برمجيات",
      opinion: "كفاءة عالية في الشغل بالتوفيق الدائم فيما هو قادم",
      rating: 5,
      icon: <MdEngineering className="text-emerald-400 text-3xl" />,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      id: 2,
      name: "عبده حسين",
      role: "رجل أعمال",
      opinion: "ما شاء الله شغل محترم كالعادة استمر يادرش مستواك مبهر",
      rating: 5,
      icon: <MdBusinessCenter className="text-indigo-400 text-3xl" />,
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: 3,
      name: "روان مورجان",
      role: "طبيبة",
      opinion: "شغل بدقة عالية وكفاءة وسرعة حقيقي عاش مستواك متطور جدا",
      rating: 4,
      icon: <GiDoctorFace className="text-rose-400 text-3xl" />,
      gradient: "from-rose-500 to-pink-600",
    },
    {
      id: 4,
      name: "أحمد فرغلي",
      role: "أستاذ جامعي",
      opinion: "انت ادتني شغف اكمل بعد ما كنت قربت افقده ربنا يوفقك",
      rating: 5,
      icon: <GiTeacher className="text-violet-400 text-3xl" />,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      id: 5,
      name: "أحمد صلاح",
      role: "خريج هندسة",
      opinion: "إنجاز في العمل علي أكمل وجه و في الوقت المحدد",
      rating: 4,
      icon: <GiGraduateCap className="text-amber-400 text-3xl" />,
      gradient: "from-amber-500 to-orange-600",
    },
    {
      id: 6,
      name: "معاذ عبد المنعم",
      role: "مطور ويب",
      opinion: "حقيقي من افضل الناس اللي اشتغلت معاها",
      rating: 5,
      icon: <MdEngineering className="text-cyan-400 text-3xl" />,
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <MainTitle title={"آراء العملاء"} p={"تقيمات وآراء بعض عملائنا الكرام"} />
      <div className="container mx-auto px-4">
        <Splide
          aria-label="Testimonials"
          options={{
            breakpoints: {
              600: {
                perPage: 1,
                gap: "15px",
              },
              900: {
                perPage: 2,
                gap: "20px",
              },
            },
            perPage: 3,
            gap: "30px",
            type: "loop",
            rewind: true,
            direction: "rtl",
            pagination: true,
            arrows: true,
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
          }}
        >
          {dataOfTestimonials.map((item) => (
            <SplideSlide key={item.id}>
              <div className="group relative h-full">
                {/* Background Card */}
                <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 dark:border-slate-700/50">
                  {/* Gradient Accent Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6">
                    <FaQuoteLeft className="text-3xl text-slate-300 dark:text-slate-600 opacity-50" />
                  </div>

                  {/* Avatar Section */}
                  <div className="flex flex-col items-center mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full bg-white/90 dark:bg-slate-800/90 rounded-2xl flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                      {item.name}
                    </h3>
                    <div
                      className={`px-4 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-medium`}
                    >
                      {item.role}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-1 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-lg transition-colors duration-200 ${
                            i < item.rating
                              ? "text-amber-400 drop-shadow-sm"
                              : "text-slate-300 dark:text-slate-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <div className="relative">
                    <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-center font-medium">
                      "{item.opinion}"
                    </p>
                  </div>

                  {/* Decorative Bottom Element */}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-gradient-to-br ${item.gradient} rounded-full opacity-80`}
                  ></div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;
