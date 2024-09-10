import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contactez-nous
        </motion.h2>
        
        <motion.div
          className="bg-red-600 text-amber-400 p-6 rounded-lg mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-2">Offre exclusive : 1 semaine d'essai gratuit !</h3>
          <p className="text-xl text-white">Inscrivez-vous aujourd'hui et découvrez Olympia Champions Gym gratuitement.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Phone className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <p className="text-lg mb-4">+1 (555) 123-4567</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300">
              Appelez-nous
            </button>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <p className="text-lg mb-4">@OlympiaChampions</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300">
              Envoyez-nous un message
            </button>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Instagram className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <p className="text-lg mb-4">@OlympiaChampionsGym</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300">
              Suivez-nous
            </button>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-xl mb-4">Visitez-nous à :</p>
          <p className="text-lg">PC4H+C78, Sulayman</p>
        </motion.div>

        {/* Google Map Embed */}
        <motion.div
          className="mt-8 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51184.36428677742!2d10.412283343066395!3d36.69799077587377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4f006f67f20d%3A0xc9530a63e269963f!2sOLYMPIA%20CHAMPIONS%20GYM!5e0!3m2!1sen!2stn!4v1725821795526!5m2!1sen!2stn"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
