import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Dumbbell, Users, Utensils } from 'lucide-react'

const services = [
  {
    icon: Dumbbell,
    title: 'Entraînement Personnel',
    description: 'Atteignez vos objectifs plus rapidement avec des plans d\'entraînement personnalisés et des conseils individuels de nos entraîneurs experts.',
  },
  {
    icon: Users,
    title: 'Cours Collectifs',
    description: 'Rejoignez nos cours collectifs dynamiques pour une expérience d\'entraînement amusante et motivante avec des personnes partageant les mêmes idées.',
  },
  {
    icon: Utensils,
    title: 'Coaching Nutritionnel',
    description: 'Obtenez des conseils d\'experts en nutrition pour compléter votre routine de fitness et maximiser vos résultats.',
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Explicitly typing the state to handle number or null
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-16 px-4 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Nos Services
        </motion.h2>
        <div className="flex overflow-x-auto pb-4 space-x-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex-shrink-0 w-64 bg-gray-100 rounded-lg p-6 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setActiveService(index)}
            >
              <service.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {activeService !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setActiveService(null)}
        >
          <div className="bg-white rounded-lg p-6 max-w-md" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4">{services[activeService].title}</h3>
            <p className="mb-4">{services[activeService].description}</p>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => setActiveService(null)}
            >
              Fermer
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}
