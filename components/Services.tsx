'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'AI Model Hosting',
    description: 'Host and serve your custom AI models with our managed infrastructure.',
    features: ['Auto-scaling', 'GPU acceleration', 'Model versioning', 'A/B testing'],
  },
  {
    title: 'API Gateway',
    description: 'Unified API access to multiple AI services with rate limiting and monitoring.',
    features: ['Rate limiting', 'API keys', 'Usage analytics', 'Webhook support'],
  },
  {
    title: 'Data Processing',
    description: 'Process large datasets with distributed computing and ML pipelines.',
    features: ['Batch processing', 'Stream processing', 'Data transformation', 'ETL pipelines'],
  },
  {
    title: 'MLOps Platform',
    description: 'End-to-end machine learning operations from training to deployment.',
    features: ['Model training', 'Experiment tracking', 'Model registry', 'CI/CD integration'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Comprehensive AI infrastructure solutions for every stage of your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/60 mb-6 text-lg">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/80">
                    <svg
                      className="w-5 h-5 text-green-400 mr-3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
