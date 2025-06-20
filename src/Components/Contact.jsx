
import MainTitle from "./MainTitle";
import { RiFacebookFill } from "react-icons/ri";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mrgnerga");

  const socialLinks = [
    {
      href: "https://github.com/devahmed2025",
      icon: <FaGithub size={24} />,
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-purple-600 hover:to-indigo-700",
      name: "GitHub",
    },
    {
      href: "https://wa.me/+201013148481",
      icon: <FaWhatsapp size={24} />,
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-400 hover:to-emerald-500",
      name: "WhatsApp",
    },
    {
      href: "https://www.linkedin.com/in/ahmedelshahat",
      icon: <FaLinkedinIn size={24} />,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
      name: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/ahmed.mohamed.345491",
      icon: <RiFacebookFill size={24} />,
      color: "from-blue-600 to-indigo-700",
      hoverColor: "hover:from-blue-500 hover:to-indigo-600",
      name: "Facebook",
    },
    {
      href: "https://www.instagram.com/a7medelsh7at",
      icon: <FaInstagram size={24} />,
      color: "from-pink-500 to-rose-600",
      hoverColor: "hover:from-pink-400 hover:to-rose-500",
      name: "Instagram",
    },
  ];

  const floatingElements = [
    {
      size: "w-20 h-20",
      position: "top-10 left-10",
      color: "bg-gradient-to-r from-blue-400 to-purple-500",
      delay: 0,
    },
    {
      size: "w-16 h-16",
      position: "top-20 right-20",
      color: "bg-gradient-to-r from-pink-400 to-rose-500",
      delay: 1,
    },
    {
      size: "w-12 h-12",
      position: "bottom-40 left-20",
      color: "bg-gradient-to-r from-green-400 to-emerald-500",
      delay: 2,
    },
    {
      size: "w-14 h-14",
      position: "bottom-20 right-10",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
      delay: 3,
    },
  ];

  return (
    <div className="py-20 relative overflow-hidden" id="contact">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + index,
            ease: "easeInOut",
            repeat: Infinity,
            delay: element.delay,
          }}
          className={`absolute ${element.size} ${element.position} ${element.color} rounded-full opacity-20 blur-sm`}
        />
      ))}

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 opacity-50" />

      <div className="relative z-10">
        <MainTitle title="تواصل معي" p="دعنا نعمل معاً لتحقيق أهدافك" />

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Welcome Message */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    دعنا نبدأ محادثة
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    أنا هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي. سواء كان
                    لديك مشروع جديد أو تحتاج إلى تطوير موقع موجود، دعنا نتحدث!
                  </p>
                </div>

                {/* Social Links */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                    تواصل عبر وسائل التواصل
                  </h4>
                  <div className="grid grid-cols-5 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`group relative w-14 h-14 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300`}
                        title={social.name}
                      >
                        {social.icon}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {social.name}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                    معلومات الاتصال
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                        <FaWhatsapp className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          واتساب
                        </p>
                        <p className="text-gray-800 dark:text-white font-medium">
                          +201013148481
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                  أرسل رسالة
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <input
                      required
                      autoComplete="off"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="الاسم الكامل"
                      className="w-full h-14 px-4 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <input
                      required
                      autoComplete="off"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="البريد الإلكتروني"
                      className="w-full h-14 px-4 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="رسالتك"
                      className="w-full px-4 py-4 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        جاري الإرسال...
                      </>
                    ) : (
                      "إرسال الرسالة"
                    )}
                  </motion.button>

                  {state.succeeded && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                    >
                      <FaCheckCircle className="text-green-600 dark:text-green-400 text-xl" />
                      <p className="text-green-800 dark:text-green-300 font-medium">
                        تم إرسال رسالتك بنجاح!
                      </p>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
