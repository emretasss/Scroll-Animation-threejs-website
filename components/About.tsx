'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '10M+', label: 'API Calls/Day' },
  { value: '50K+', label: 'Active Users' },
  { value: '99.99%', label: 'Uptime' },
  { value: '<50ms', label: 'Avg Latency' },
]

const values = [
  {
    title: 'Innovation First',
    description: 'We stay at the forefront of AI technology, constantly integrating the latest models and techniques.',
  },
  {
    title: 'Developer Experience',
    description: 'We prioritize simplicity and ease of use, making AI accessible to developers of all levels.',
  },
  {
    title: 'Reliability',
    description: 'Enterprise-grade infrastructure ensures your applications run smoothly 24/7.',
  },
  {
    title: 'Security',
    description: 'Your data and models are protected with industry-leading security practices.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Why Choose NeuralCore?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Built by developers, for developers. We understand what it takes to build production-ready AI applications.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-white/60 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
